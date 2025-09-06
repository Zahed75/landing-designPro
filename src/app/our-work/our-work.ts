import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PortfolioSection {
  title: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-our-work-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-work.html',

})
export class OurWorkPage {
  @ViewChild('portfolioSection') portfolioSection!: ElementRef;
  
  lightboxActive = false;
  selectedImage = '';
  
  portfolioSections: PortfolioSection[] = [
    {
      title: 'Social Media Designs',
      description: "Engaging designs to boost your brand's presence and grab the attention of your target audience. Custom Facebook, Instagram, and cross-platform-ready posts with vibrant visuals.",
      images: [
        '/assets/images/Social/1.png',
        '/assets/images/Social/2.png',
        '/assets/images/Social/3.png',
        '/assets/images/Social/4.png',
        '/assets/images/Social/5.png',
        '/assets/images/Social/6.png',
        '/assets/images/Social/7.png',
        '/assets/images/Social/8.png',
        '/assets/images/Social/9.png',
        '/assets/images/Social/10.png',
      ]
    },
    {
      title: 'Ad Creative Designs',
      description: 'Eye-catching ad creatives for digital campaigns, banners, and more. Designed to maximize conversions and brand recall.',
      images: [
        '/assets/images/Ad Creative/1.png',
        '/assets/images/Ad Creative/2.png',
        '/assets/images/Ad Creative/3.png',
        '/assets/images/Ad Creative/4.png',
        '/assets/images/Ad Creative/5.png',
        '/assets/images/Ad Creative/6.png',
        '/assets/images/Ad Creative/7.png',
        '/assets/images/Ad Creative/8.png',
        '/assets/images/Ad Creative/9.png',
        '/assets/images/Ad Creative/10.png',
      ]
    },
    {
      title: 'Email Design',
      description: 'Professional email templates and newsletters that drive engagement and conversions. Responsive designs optimized for all devices.',
      images: [
        '/assets/images/ED/5.png',
        '/assets/images/ED/2.png',
        '/assets/images/ED/3.png',
        '/assets/images/ED/4.png',
        '/assets/images/ED/5.png',
        '/assets/images/ED/6.png',
        '/assets/images/ED/e7.png',
        '/assets/images/ED/e8.png',
      ]
    },
    {
      title: 'Web Design',
      description: 'Modern, responsive website designs that provide exceptional user experiences and drive business results.',
      images: [
        '/assets/images/Website Designs/1.png',
        '/assets/images/Website Designs/2.png',
        '/assets/images/Website Designs/3.png',
        '/assets/images/Website Designs/4.png',
        '/assets/images/Website Designs/5.png',
        '/assets/images/Website Designs/6.png',
        '/assets/images/Website Designs/7.png',
        '/assets/images/Website Designs/8.png',
        '/assets/images/Website Designs/9.png',
      ]
    },
    {
      title: 'Integrated Campaign Designs',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/Intergrated Campain Designs/1.png',
        '/assets/images/Intergrated Campain Designs/2.png',
        '/assets/images/Intergrated Campain Designs/3.png',
        '/assets/images/Intergrated Campain Designs/4.png',
        '/assets/images/Intergrated Campain Designs/5.png',
        '/assets/images/Intergrated Campain Designs/6.png',
        '/assets/images/Intergrated Campain Designs/7.png',
        '/assets/images/Intergrated Campain Designs/8.png',
        '/assets/images/Intergrated Campain Designs/9.png',
        '/assets/images/Intergrated Campain Designs/10.png',
        '/assets/images/Intergrated Campain Designs/11.png',
        '/assets/images/Intergrated Campain Designs/12.png',
      ]
    },
    {
      title: 'Print Design',
      description: 'High-quality print materials including brochures, flyers, business cards, and marketing collateral that make lasting impressions.',
      images: [
        '/assets/images/Print Designs/1.png',
        '/assets/images/Print Designs/2.png',
        '/assets/images/Print Designs/3.png',
        '/assets/images/Print Designs/4.png',
        '/assets/images/Print Designs/5.png',
        '/assets/images/Print Designs/6.png',
        '/assets/images/Print Designs/7.png',
        '/assets/images/Print Designs/8.png',
        '/assets/images/Print Designs/9.png',
        '/assets/images/Print Designs/10.png',
        '/assets/images/Print Designs/11.png',
        '/assets/images/Print Designs/12.png',
        '/assets/images/Print Designs/13.png',
        '/assets/images/Print Designs/14.png',
        '/assets/images/Print Designs/15.png',
        '/assets/images/Print Designs/16.png',
        '/assets/images/Print Designs/17.png',
        '/assets/images/Print Designs/18.png',
        '/assets/images/Print Designs/19.png',
        '/assets/images/Print Designs/20.png',
        '/assets/images/Print Designs/21.png',
        '/assets/images/Print Designs/22.png',
        '/assets/images/Print Designs/23.png',
        '/assets/images/Print Designs/24.png',
        '/assets/images/Print Designs/25.png',
      ]
    },
    {
      title: 'Branding & Logo Design',
      description: 'Complete brand identity solutions including logos, color schemes, typography, and brand guidelines that establish strong market presence.',
      images: [
        '/assets/images/Branding logo/1.png',
        '/assets/images/Branding logo/2.png',
        '/assets/images/Branding logo/3.png',
        '/assets/images/Branding logo/4.png',
        '/assets/images/Branding logo/5.png',
        '/assets/images/Branding logo/6.png',
        '/assets/images/Branding logo/7.png',
        '/assets/images/Branding logo/8.png',
        '/assets/images/Branding logo/9.png',
        '/assets/images/Branding logo/10.png',
        '/assets/images/Branding logo/11.png',
        '/assets/images/Branding logo/12.png',
        '/assets/images/Branding logo/13.png',
        '/assets/images/Branding logo/14.png',
        '/assets/images/Branding logo/15.png',
        '/assets/images/Branding logo/16.png',
        '/assets/images/Branding logo/17.png',
        '/assets/images/Branding logo/18.png',
        '/assets/images/Branding logo/19.png',
        '/assets/images/Branding logo/20.png',
        '/assets/images/Branding logo/21.png',
        '/assets/images/Branding logo/22.png',
        '/assets/images/Branding logo/23.png',
        '/assets/images/Branding logo/24.png',
        '/assets/images/Branding logo/25.png',
        '/assets/images/Branding logo/26.png',
        '/assets/images/Branding logo/27.png',
      ]
    },
    {
      title: 'Infographics',
      description: 'Data visualization and informational graphics that transform complex information into engaging, easy-to-understand visual content.',
      images: [
        '/assets/images/Infographics Designs/1.png',
        '/assets/images/Infographics Designs/2.png',
        '/assets/images/Infographics Designs/3.png',
        '/assets/images/Infographics Designs/4.png',
        '/assets/images/Infographics Designs/5.png',
        '/assets/images/Infographics Designs/6.png',
        '/assets/images/Infographics Designs/7.png',
        '/assets/images/Infographics Designs/8.png',
        '/assets/images/Infographics Designs/9.png',
        '/assets/images/Infographics Designs/10.png',
        '/assets/images/Infographics Designs/10.png',
        '/assets/images/Infographics Designs/11.png',
        '/assets/images/Infographics Designs/12.png',
      ]
    },
  ];

  scrollToPortfolio() {
    this.portfolioSection.nativeElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }

  openLightbox(image: string) {
    this.selectedImage = image;
    this.lightboxActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxActive = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.closeLightbox();
  }

  ngAfterViewInit() {
    // Animate stats counting
    this.animateStats();
    
    // Initialize animations for portfolio sections when they come into view
    this.initScrollAnimations();
  }

  animateStats() {
    const statElements = document.querySelectorAll('.stat-number');
    
    statElements.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count') || '0', 10);
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          stat.textContent = target.toString();
          clearInterval(timer);
        } else {
          stat.textContent = Math.round(current).toString();
        }
      }, duration / steps);
    });
  }

  initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section');
        }
      });
    }, observerOptions);

    // Observe all portfolio sections
    const sections = document.querySelectorAll('.our-work-section');
    sections.forEach(section => {
      observer.observe(section);
    });
  }
}