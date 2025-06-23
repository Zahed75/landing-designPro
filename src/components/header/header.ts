import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = false;
  isSolutionsOpen = false;
  isIndustriesOpen = false;
  isOurWorkOpen = false;
  isResourcesOpen = false;

  solutions = [
    {
      title: 'Graphic Design',
      description: 'See how it works, start to finish, in the 2-minute video.'
    },
    {
      title: 'Custom Illustrations',
      description: 'Customize your creative direction with on-demand and original illustrations.'
    },
    {
      title: 'Presentation Design',
      description: 'Engage your audience with on-brand presentations that stand out from the competition.'
    },
    {
      title: 'Motion Graphics',
      description: 'Transform static graphics, enhance existing video, create graphic loops, and more!'
    },
    {
      title: 'Video Editing',
      description: 'Handoff post-production footage for professional video editing.'
    }
  ];

  ourWork = [
    {
      title: 'Ad Creative',
      description: 'Eye-catching ads in every aspect ratio.'
    },
    {
      title: 'Social Media Creative',
      description: 'Scroll-stopping assets for every platform.'
    },
    {
      title: 'Web Design',
      description: 'UI designs for websites that wow.'
    },
    {
      title: 'Email Design',
      description: 'Templates and graphics that drive results.'
    },
    {
      title: 'Packaging & Merch Design',
      description: 'Stickers, keychains, and more.'
    },
    {
      title: 'Print Design',
      description: 'Book covers, magazines, posters and more.'
    },
    {
      title: 'Branding',
      description: 'Logos, brand kits and visual guide designs.'
    },
    {
      title: 'eBook & Digital Report Design',
      description: 'Professional digital publications.'
    }
  ];

  industries = [
    {
      title: 'Agencies',
      description: 'See how we power over 1,400 agencies and their creative delivery.'
    },
    {
      title: 'B2B',
      description: 'See how Design Pickle can support your business goals.'
    },
    {
      title: 'B2C',
      description: 'From retail to e-commerce and beyond.'
    }
  ];

  resources = [
    {
      column: 'DISCOVER',
      items: [
        { title: 'Blog', description: 'Latest product news and stories', href: '#' },
        { title: 'Customer stories', description: 'Case studies and videos', href: '#' }
      ]
    },
    {
      column: 'LEARN',
      items: [
        { title: 'FAQs', description: 'Answers to commonly asked questions', href: '#' }
      ]
    },
    {
      column: 'CONNECT',
      items: [
        { title: 'Refer Google Workspace', description: 'Earn rewards with our Referral Program', href: '#' }
      ]
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSolutions(event: Event) {
    event.preventDefault();
    this.isSolutionsOpen = !this.isSolutionsOpen;
    if (this.isSolutionsOpen) {
      this.isIndustriesOpen = false;
      this.isOurWorkOpen = false;
    }
  }

  toggleIndustries(event: Event) {
    event.preventDefault();
    this.isIndustriesOpen = !this.isIndustriesOpen;
    if (this.isIndustriesOpen) {
      this.isSolutionsOpen = false;
      this.isOurWorkOpen = false;
    }
  }

  toggleOurWork(event: Event) {
    event.preventDefault();
    this.isOurWorkOpen = !this.isOurWorkOpen;
    if (this.isOurWorkOpen) {
      this.isSolutionsOpen = false;
      this.isIndustriesOpen = false;
    }
  }

  toggleResources(event: Event) {
    event.preventDefault();
    this.isResourcesOpen = !this.isResourcesOpen;
    if (this.isResourcesOpen) {
      this.isSolutionsOpen = false;
      this.isIndustriesOpen = false;
      this.isOurWorkOpen = false;
    }
  }

  closeDropdowns() {
    this.isSolutionsOpen = false;
    this.isIndustriesOpen = false;
    this.isOurWorkOpen = false;
    this.isResourcesOpen = false;
  }
}
