import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../enviornments/enviornment';

interface PricingTier {
  id: number;
  name: string;
  price: number;
  features: string[];
  interval: string;
  stripe_product_id?: string;
  stripe_price_id?: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class PricingPage implements OnInit {
  pricingTiers: PricingTier[] = [];
  loading = true;
  error = '';

  // UI state for checkout modal
  showCheckoutModal = false;
  selectedTier: PricingTier | null = null;

  // form model
  form = {
    email: '',
    password: ''
  };

  // button / request state
  startingCheckout = false;      // for modal submit button
  cardButtonLoading: Record<number, boolean> = {}; // per-tier loading on “Get Started”

  // after-return status
  statusMessage = '';
  statusData: any = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.fetchPricingTiers();
    this.checkPendingStatusAfterReturn();
  }

  fetchPricingTiers() {
    this.loading = true;
    this.error = '';
    this.pricingTiers = [];
    this.cdr.detectChanges();

    const apiUrl = `${environment.apiBaseUrl}/pricingTier/api/get-pricingTierList`;

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        if (response.code === 200) {
          this.pricingTiers = response.data.map((tier: any) => ({
            id: tier.id,
            name: tier.name,
            price: Number(tier.price),
            features: tier.features || [],
            interval: tier.interval,
            stripe_product_id: tier.stripe_product_id,
            stripe_price_id: tier.stripe_price_id
          }));
        } else {
          this.error = response.message || 'Failed to load pricing tiers';
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Failed to load pricing tiers';
        this.loading = false;
        this.cdr.detectChanges();
        console.error('Error fetching pricing tiers:', err);
      }
    });
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(0)}`;
  }

  isPopular(index: number): boolean {
    return index === 1;
  }

  // ======= CHECKOUT FLOW =======

  onGetStarted(tier: PricingTier) {
    // open modal to collect email & password
    this.selectedTier = tier;
    this.form.email = '';
    this.form.password = '';
    this.showCheckoutModal = true;
  }

  closeModal() {
    if (this.startingCheckout) return;
    this.showCheckoutModal = false;
    this.selectedTier = null;
  }

  startCheckout() {
    if (!this.selectedTier) return;
    const tier = this.selectedTier;

    const email = (this.form.email || '').trim();
    const password = (this.form.password || '').trim();
    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }

    this.startingCheckout = true;

    const createUrl = `${environment.apiBaseUrl}/subscribe/api/add-subscription`;
    const body = {
      tier_id: tier.id,
      password,
      email
    };

    this.http.post<any>(createUrl, body).subscribe({
      next: (res) => {
        this.startingCheckout = false;
        this.cdr.detectChanges();

        // Store email so we can check status when user returns
        sessionStorage.setItem('pending_subscription_email', email);

        // Redirect to Stripe Checkout
        const url = res?.checkout_session_url;
        if (url) {
          window.location.href = url;
        } else {
          alert('Could not start checkout. Missing checkout URL.');
        }
      },
      error: (err) => {
        this.startingCheckout = false;
        this.cdr.detectChanges();
        console.error('Create subscription error:', err);
        const message = err?.error?.error || err?.error?.message || 'Failed to start checkout';
        alert(message);
      }
    });
  }

  // After returning from Stripe (success/cancel URL), check status using stored email
  checkPendingStatusAfterReturn() {
    const email = sessionStorage.getItem('pending_subscription_email');
    if (!email) return;

    const statusUrl = `${environment.apiBaseUrl}/subscribe/api/subscription/status?email=${encodeURIComponent(email)}`;
    this.http.get<any>(statusUrl).subscribe({
      next: (res) => {
        this.statusMessage = res?.message || '';
        this.statusData = res?.data || null;

        // If we got a subscription back, clear the stored email
        if (this.statusData?.status) {
          sessionStorage.removeItem('pending_subscription_email');
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Status check error:', err);
        this.cdr.detectChanges();
      }
    });
  }
}
