import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
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

interface ComparisonData {
  services: any[];
  automations: any[];
  security: any[];
  fileTypes: any[];
  platform: any[];
  turnaround: any[];
}

interface ApiPricingTier {
  id: number;
  name: string;
  price: string;
  features: string[];
  interval: string;
  stripe_product_id: string;
  stripe_price_id: string;
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

  // Static data for features and services (since API only returns basic info)
  private staticTierData: { [key: string]: Partial<PricingTier> } = {
    'Starter Plan': {
      subtitle: 'Graphics',
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
      ]
    },
    'Graphics Pro': {
      subtitle: 'Graphics Pro',
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
      ]
    },
    'Graphics Premium': {
      subtitle: 'Best Value',
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
      ]
    }
  };

  comparisonData: ComparisonData = {
    // ... keep the same comparison data as before ...
    services: [
      {
        name: 'Graphic Design',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Custom Illustrations',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Presentation Design',
        tiers: [
          { included: false }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Motion Graphics',
        tiers: [
          { included: false }, { included: false }, { included: true }
        ]
      },
      {
        name: 'Video Editing',
        tiers: [
          { included: false }, { included: false }, { included: true }
        ]
      }
    ],
    automations: [
      {
        name: 'Designpro API',
        tiers: [
          { included: false }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Teams',
        tiers: [
          { included: false }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Live chat',
        tiers: [
          { included: false }, { included: true }, { included: true }
        ]
      }
    ],
    security: [
      {
        name: 'Google Authentication',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Email Authentication',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'User Access Controls & Permissions',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      }
    ],
    fileTypes: [
      { name: 'Adobe Illustrator (AI)', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'Adobe Photoshop (PSD)', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'Adobe InDesign (INDD)', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'PDF', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'JPG', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'PNG', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'EPS', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'SVG', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'GIF', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'Canva', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'Microsoft PowerPoint', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'Google Slides', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'Apple Keynote', tiers: [{ included: true }, { included: true }, { included: true }] },
      { name: 'Figma', tiers: [{ included: false }, { included: false }, { included: true }] },
      { name: 'MOGRT', tiers: [{ included: false }, { included: false }, { included: true }] },
      { name: 'MOV', tiers: [{ included: false }, { included: false }, { included: true }] },
      { name: 'MP4', tiers: [{ included: false }, { included: false }, { included: true }] }
    ],
    platform: [
      {
        name: 'Access',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'User Limit',
        tiers: [
          { value: '1 User' }, { value: 'Up to 5 Users' }, { value: 'Up to 10 Users' }
        ]
      },
      {
        name: 'Brand Limit',
        tiers: [
          { value: '1 Brand' }, { value: 'Up to 3 Brands' }, { value: 'Up to 10 Brands' }
        ]
      },
      {
        name: 'Markup & Annotation Tool',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Version Control',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Email Notifications',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Collaboration Tools',
        tiers: [
          { included: false }, { included: true }, { included: true }
        ]
      },
      {
        name: 'File Storage',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Creative Management',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Project Coordination',
        tiers: [
          { included: false }, { included: false }, { included: true }
        ]
      },
      {
        name: 'Active Communications',
        tiers: [
          { included: false }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Slack',
        tiers: [
          { included: false }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Quality Control',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Administration',
        tiers: [
          { included: true }, { included: true }, { included: true }
        ]
      },
      {
        name: 'Add-On: White Label Share & Review',
        tiers: [
          { included: false }, { included: false }, { included: false }
        ]
      }
    ],
    turnaround: [
      {
        name: 'Graphic Design',
        times: ['24-48 hours', '24-48 hours', '24-48 hours']
      },
      {
        name: 'Custom Illustration',
        times: ['24 hours', '24 hours', '24 hours']
      },
      {
        name: 'Presentation Design',
        times: ['48 hours', '48 hours', '48 hours']
      },
      {
        name: 'Motion Graphics',
        times: ['72 hours', '72 hours', '72 hours']
      },
      {
        name: 'Video Editing',
        times: ['72 hours', '72 hours', '72 hours']
      }
    ]
  };

  // UI state for checkout modal
  showCheckoutModal = false;
  selectedTier: PricingTier | null = null;

  // form model
  form = {
    email: '',
    password: ''
  };

  // button / request state
  startingCheckout = false;
  cardButtonLoading: Record<number, boolean> = {};

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
    
    const apiUrl = `${environment.apiBaseUrl}/pricingTier/api/get-pricingTierList`;

    this.http.get<{ code: number; message: string; data: ApiPricingTier[] }>(apiUrl).subscribe({
      next: (response) => {
        if (response.code === 200) {
          this.pricingTiers = response.data.map((apiTier: ApiPricingTier) => {
            const staticData = this.staticTierData[apiTier.name] || {};
            
            return {
              id: apiTier.id,
              name: apiTier.name,
              subtitle: staticData.subtitle || apiTier.name,
              price: Number(apiTier.price),
              description: staticData.description || '',
              services: staticData.services || [],
              features: staticData.features || [],
              interval: apiTier.interval,
              stripe_product_id: apiTier.stripe_product_id,
              stripe_price_id: apiTier.stripe_price_id
            };
          });

          // Add the Ultimate Plan manually (since it's not in the API)
          this.pricingTiers.push({
            id: 0, // Use 0 or a special ID for non-API tiers
            name: 'Ultimate Plan',
            subtitle: 'Power Plans',
            price: 0,
            description: 'Bespoke Creativity Without Limits. Starting at up to 8 hours of daily design time, Power includes a fully dedicated team, a production coordinator, and dedicated Art Direction to ensure every project aligns with your brand vision.',
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
          });

        } else {
          this.error = response.message || 'Failed to load pricing tiers';
        }
        this.loading = false;
        this.setupStickyHeader();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Failed to load pricing tiers from API';
        this.loading = false;
        this.cdr.detectChanges();
        console.error('Error fetching pricing tiers:', err);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleScroll();
  }

  setupStickyHeader() {
    setTimeout(() => this.handleScroll(), 100);
  }

  handleScroll() {
    const stickyHeader = document.querySelector('.sticky-pricing-header');
    const pricingSection = document.querySelector('section');
    
    if (stickyHeader && pricingSection) {
      const scrollY = window.scrollY || window.pageYOffset;
      
      if (scrollY > 400) {
        stickyHeader.classList.remove('hidden', 'transform', '-translate-y-full', 'opacity-0');
      } else {
        stickyHeader.classList.add('hidden', 'transform', '-translate-y-full', 'opacity-0');
      }
    }
  }

  formatPrice(price: number): string {
    if (price === 0) return 'Contact us';
    return `$${price.toFixed(0)}`;
  }

  getButtonText(tier: PricingTier): string {
    if (tier.price === 0) return 'Request a Quote';
    return 'Get Started';
  }

  isBestValue(index: number): boolean {
    return this.pricingTiers[index]?.name === 'Graphics Premium';
  }

  // ======= CHECKOUT FLOW =======

  onGetStarted(tier: PricingTier) {
    if (tier.price === 0 || tier.id === 0) {
      window.location.href = '/contact';
      return;
    }
    
    this.selectedTier = tier;
    this.form.email = '';
    this.form.password = '';
    this.showCheckoutModal = true;
  }

  onStickyButtonClick(tier: PricingTier) {
    this.onGetStarted(tier);
  }

  closeModal() {
    if (this.startingCheckout) return;
    this.showCheckoutModal = false;
    this.selectedTier = null;
  }

  startCheckout() {
    if (!this.selectedTier || this.selectedTier.id === 0) return;
    
    const tier = this.selectedTier;
    const email = (this.form.email || '').trim();
    const password = (this.form.password || '').trim();
    
    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }

    this.startingCheckout = true;
    this.cardButtonLoading[tier.id] = true;

    const createUrl = `${environment.apiBaseUrl}/subscribe/api/add-subscription`;
    
    // Debug: Log what we're sending
    console.log('Creating subscription with:', {
      tier_id: tier.id,
      tier_name: tier.name,
      email: email
    });

    const body = {
      tier_id: tier.id,
      password: password,
      email: email
    };

    this.http.post<any>(createUrl, body).subscribe({
      next: (res) => {
        this.startingCheckout = false;
        this.cardButtonLoading[tier.id] = false;
        this.cdr.detectChanges();

        sessionStorage.setItem('pending_subscription_email', email);

        const url = res?.checkout_session_url;
        if (url) {
          window.location.href = url;
        } else {
          alert('Could not start checkout. Missing checkout URL.');
        }
      },
      error: (err) => {
        this.startingCheckout = false;
        this.cardButtonLoading[tier.id] = false;
        this.cdr.detectChanges();
        
        console.error('Create subscription error:', err);
        console.error('Error details:', err.error);
        
        // More detailed error message
        let message = 'Failed to start checkout. ';
        if (err.error?.error) {
          message += `Server error: ${err.error.error}`;
        } else if (err.error?.message) {
          message += `Server message: ${err.error.message}`;
        } else {
          message += 'Please try again.';
        }
        
        alert(message);
      }
    });
  }

  checkPendingStatusAfterReturn() {
    const email = sessionStorage.getItem('pending_subscription_email');
    if (!email) return;

    const statusUrl = `${environment.apiBaseUrl}/subscribe/api/subscription/status?email=${encodeURIComponent(email)}`;
    this.http.get<any>(statusUrl).subscribe({
      next: (res) => {
        this.statusMessage = res?.message || '';
        this.statusData = res?.data || null;

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