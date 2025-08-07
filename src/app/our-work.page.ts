import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioSection {
  title: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-our-work-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-work.html',
  styleUrls: ['./our-work.css']
})
export class OurWorkPage {
  portfolioSections: PortfolioSection[] = [
    {
      title: 'Social Media Designs',
      description: "Engaging designs to boost your brand's presence and grab the attention of your target audience. Custom Facebook, Instagram, and cross-platform-ready posts with vibrant visuals.",
      images: [
        '/assets/images/Social/1.png',
        '/assets/images/Social/2.png',
        '/assets/images/Social/3.png',
        '/assets/images/Social/4.png'
      ]
    },
    {
      title: 'Ad Creative Designs',
      description: 'Eye-catching ad creatives for digital campaigns, banners, and more. Designed to maximize conversions and brand recall.',
      images: [
        '/assets/images/Ad Creative/1.png',
        '/assets/images/Ad Creative/2.png',
        '/assets/images/Ad Creative/3.png',
        '/assets/images/Ad Creative/4.png'
      ]
    },
    {
      title: 'Email Design',
      description: 'Professional email templates and newsletters that drive engagement and conversions. Responsive designs optimized for all devices.',
      images: [
        '/assets/images/ED/5.png',
        '/assets/images/ED/2.png',
        '/assets/images/ED/3.png',
        '/assets/images/ED/4.png'
      ]
    },
    {
      title: 'Web Design',
      description: 'Modern, responsive website designs that provide exceptional user experiences and drive business results.',
      images: [
        '/assets/images/Website Designs/1.png',
        '/assets/images/Website Designs/2.png',
        '/assets/images/Website Designs/3.png',
        '/assets/images/Website Designs/4.png'
      ]
    },
    {
      title: 'Integrated Campaign Designs',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/Intergrated Campain Designs/1.png',
        '/assets/images/Intergrated Campain Designs/2.png',
        '/assets/images/Intergrated Campain Designs/3.png',
        '/assets/images/Intergrated Campain Designs/4.png'
      ]
    },
    {
      title: 'Print Design',
      description: 'High-quality print materials including brochures, flyers, business cards, and marketing collateral that make lasting impressions.',
      images: [
        '/assets/images/Print Designs/1.png',
        '/assets/images/Print Designs/2.png',
        '/assets/images/Print Designs/3.png',
        '/assets/images/Print Designs/4.png'
      ]
    },
    {
      title: 'Branding & Logo Design',
      description: 'Complete brand identity solutions including logos, color schemes, typography, and brand guidelines that establish strong market presence.',
      images: [
        '/assets/images/Branding logo/1.png',
        '/assets/images/Branding logo/2.png',
        '/assets/images/Branding logo/3.png',
        '/assets/images/Branding logo/4.png'
      ]
    },
    {
      title: 'Infographics',
      description: 'Data visualization and informational graphics that transform complex information into engaging, easy-to-understand visual content.',
      images: [
        '/assets/images/Infographics Designs/1.png',
        '/assets/images/Infographics Designs/2.png',
        '/assets/images/Infographics Designs/3.png',
        '/assets/images/Infographics Designs/4.png'
      ]
    },
    


    
  ];
}