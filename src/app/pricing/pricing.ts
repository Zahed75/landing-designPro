import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../enviornments/enviornment';

interface Service {
  name: string;
  included: boolean;
}

interface Feature {
  name: string;
  included: boolean;
}

interface PricingTier {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  services: Service[];
  features: Feature[];
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
  pricingTiers: PricingTier[] = [
    {
      id: 1,
      name: 'Starter Plan',
      subtitle: 'Graphics',
      price: 499,
      description: 'Fast, Simple, Reliable. Perfect for essential graphic design needs, Graphics provides up to 1 hour of daily design time to deliver consistent, on-brand results through a global pool of skilled creatives.',
      services: [
        { name: 'Graphic Design Service', included: true },
        { name: 'Custom Illustration Service', included: true },
        { name: 'Presentation Design Service', included: false },
        { name: 'Motion Graphics Service', included: false },
        { name: 'Video Editing Service', included: false }
      ],
      features: [
        { name: '24/5 Customer Support', included: true },
        { name: 'Adobe File Delivery', included: true },
        { name: 'Canva File Delivery', included: true },
        { name: 'Dedicated Design Team', included: false },
        { name: '24 business hours turnaround', included: false },
        { name: 'Unlimited Revisions', included: false },
        { name: 'Share & Review Links', included: false },
        { name: 'Slack Collaboration', included: false },
        { name: 'Figma File Delivery', included: false },
        { name: 'Onboarding', included: false },
        { name: 'Premium Support', included: false },
        { name: 'Production Coordinators', included: false },
        { name: 'Concurrent or Simultaneous Requests', included: false },
        { name: 'High Volume Support', included: false }
      ],
      interval: 'month'
    },
    {
      id: 2,
      name: 'Essential Plan',
      subtitle: 'Graphics Pro',
      price: 995,
      description: 'Tailored Creativity, Connected Collaboration. With up to 2 hours of daily design time, presentation design, and real-time Slack collaboration, Pro offers a more personalized experience, making our team feel like an extension of yours.',
      services: [
        { name: 'Graphic Design Service', included: true },
        { name: 'Custom Illustration Service', included: true },
        { name: 'Presentation Design Service', included: true },
        { name: 'Motion Graphics Service', included: false },
        { name: 'Video Editing Service', included: false }
      ],
      features: [
        { name: '24/5 Customer Support', included: true },
        { name: 'Adobe File Delivery', included: true },
        { name: 'Canva File Delivery', included: true },
        { name: 'Dedicated Design Team', included: true },
        { name: '24 business hours turnaround', included: true },
        { name: 'Unlimited Revisions', included: true },
        { name: 'Share & Review Links', included: true },
        { name: 'Slack Collaboration', included: true },
        { name: 'Figma File Delivery', included: false },
        { name: 'Onboarding', included: false },
        { name: 'Premium Support', included: false },
        { name: 'Production Coordinators', included: false },
        { name: 'Concurrent or Simultaneous Requests', included: false },
        { name: 'High Volume Support', included: false },
        { name: 'Add-On: White Label Share & Review', included: false }
      ],
      interval: 'month'
    },
    {
      id: 3,
      name: 'Graphics Premium',
      subtitle: 'Best Value',
      price: 1695,
      description: 'Multimedia Excellence, Simplified. Premium delivers up to 2 hours of daily design time for advanced projects, including motion graphics and video editing, empowering you to execute dynamic, multimedia campaigns with ease.',
      services: [
        { name: 'Graphic Design Service', included: true },
        { name: 'Custom Illustration Service', included: true },
        { name: 'Presentation Design Service', included: true },
        { name: 'Motion Graphics Service', included: true },
        { name: 'Video Editing Service', included: true }
      ],
      features: [
        { name: '24/5 Customer Support', included: true },
        { name: 'Adobe File Delivery', included: true },
        { name: 'Canva File Delivery', included: true },
        { name: 'Dedicated Design Team', included: true },
        { name: '24 business hours turnaround', included: true },
        { name: 'Unlimited Revisions', included: true },
        { name: 'Share & Review Links', included: true },
        { name: 'Slack Collaboration', included: true },
        { name: 'Figma File Delivery', included: true },
        { name: 'Onboarding', included: true },
        { name: 'Premium Support', included: true },
        { name: 'Production Coordinators', included: false },
        { name: 'Concurrent or Simultaneous Requests', included: false },
        { name: 'High Volume Support', included: false },
        { name: 'Add-On: White Label Share & Review', included: false }
      ],
      interval: 'month'
    },
    {
      id: 4,
      name: 'Ultimate Plan',
      subtitle: 'Power Plans',
      price: 0,
      description: 'Bespoke Creativity Without Limits. Starting at up to 8 hours of daily design time, Power includes a fully dedicated team, a production coordinator, and dedicated Art Direction to ensure every project aligns with your brand vision. Comprehensive support makes it the perfect solution for high-volume creative demands.',
      services: [
        { name: 'Graphic Design Service', included: true },
        { name: 'Custom Illustration Service', included: true },
        { name: 'Presentation Design Service', included: true },
        { name: 'Motion Graphics Service', included: true },
        { name: 'Video Editing Service', included: true }
      ],
      features: [
        { name: '24/5 Customer Support', included: true },
        { name: 'Adobe File Delivery', included: true },
        { name: 'Canva File Delivery', included: true },
        { name: 'Dedicated Design Team', included: true },
        { name: '24 business hours turnaround', included: true },
        { name: 'Unlimited Revisions', included: true },
        { name: 'Share & Review Links', included: true },
        { name: 'Slack Collaboration', included: true },
        { name: 'Figma File Delivery', included: true },
        { name: 'Onboarding', included: true },
        { name: 'Premium Support', included: true },
        { name: 'Production Coordinators', included: true },
        { name: 'Concurrent or Simultaneous Requests', included: true },
        { name: 'High Volume Support', included: true },
        { name: 'Add-On: White Label Share & Review', included: false }
      ],
      interval: 'month'
    }
  ];
  
  loading = false;
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
  cardButtonLoading: Record<number, boolean> = {}; // per-tier loading on "Get Started"

  // after-return status
  statusMessage = '';
  statusData: any = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Since we're using static data, no need for API call
    // But keeping the structure for future API integration
    this.loading = false;
    this.checkPendingStatusAfterReturn();
  }

  formatPrice(price: number): string {
    if (price === 0) return 'Contact us';
    return `$${price.toFixed(0)}`;
  }

  isBestValue(index: number): boolean {
    return index === 2; // Graphics Premium is the "Best Value"
  }

  // ======= CHECKOUT FLOW =======

  onGetStarted(tier: PricingTier) {
    if (tier.price === 0) {
      // For "Contact us" tier, redirect to contact page or show contact form
      window.location.href = '/contact';
      return;
    }
    
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