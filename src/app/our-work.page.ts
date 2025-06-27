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
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308'
      ]
    },
    {
      title: 'Ad Creative Designs',
      description: 'Eye-catching ad creatives for digital campaigns, banners, and more. Designed to maximize conversions and brand recall.',
      images: [
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429'
      ]
    },
    {
      title: 'Branding Logo Designs',
      description: 'Unique and memorable logos to help your brand stand out. From startups to established businesses, we create logos that leave a lasting impression.',
      images: [
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429'
      ]
    },
    {
      title: 'Email Designs',
      description: 'Beautifully designed email templates for marketing campaigns, newsletters, and more. Optimized for all devices and email clients.',
      images: [
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429'
      ]
    },
    {
      title: 'Infographics Designs',
      description: 'Custom infographics to explain ideas, data, and other digital content in a visually appealing way. Perfect for reports, social media, and presentations.',
      images: [
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429'
      ]
    },
    {
      title: 'Integrated Campaign Designs',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
      ]
    }
  ];
}