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
        '/assets/images/1093520_Mockup-Work-SamplesSocial2_060921.jpg',
        '/assets/images/1093520_Mockup-Work-SamplesSocial3_060921.jpg',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg',
        '/assets/images/RealEstate_SocialMedia.jpg'
      ]
    },
    {
      title: 'Ad Creative Designs',
      description: 'Eye-catching ad creatives for digital campaigns, banners, and more. Designed to maximize conversions and brand recall.',
      images: [
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial2_060921.jpg',
        '/assets/images/1093520_Mockup-Work-SamplesSocial3_060921.jpg'
      ]
    },
    {
      title: 'Email Design',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'Web Design',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'Integrated Campaign Designs',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'Packaging & Merchandise Design',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'Print Design',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'Branding & Logo Design',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'eBook & Digital Report Design',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'Custom Illustrations',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    {
      title: 'Infographics',
      description: 'Comprehensive campaign visuals across web, social, and print. Consistent branding and creative storytelling for maximum impact.',
      images: [
        '/assets/images/08182022_Integrated-Campaign-Mock-Ups_V2_2-03-768x768.webp',
        '/assets/images/7-ElevenMockup-768x432.png',
        '/assets/images/1093520_Mockup-Work-SamplesSocial5_060921.jpg'
      ]
    },
    


    
  ];
}