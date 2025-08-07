import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class PricingPage implements OnInit {
  pricingTiers: PricingTier[] = [];
  loading = true;
  error = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.fetchPricingTiers();
  }

  fetchPricingTiers() {
    // Reset states
    this.loading = true;
    this.error = '';
    this.pricingTiers = [];
    
    // Force change detection
    this.cdr.detectChanges();
    
    // Replace with your actual API endpoint
    const apiUrl = 'http://localhost:8000/pricingTier/api/get-pricingTierList';
    
    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        if (response.code === 200) {
          this.pricingTiers = response.data.map((tier: any) => {
            const convertedTier: PricingTier = {
              id: tier.id,
              name: tier.name,
              price: Number(tier.price), // Explicitly convert to number
              features: tier.features || [],
              interval: tier.interval,
              stripe_product_id: tier.stripe_product_id,
              stripe_price_id: tier.stripe_price_id
            };
            return convertedTier;
          });
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
    // Make the middle tier popular (index 1 for 3 tiers)
    return index === 1;
  }
}