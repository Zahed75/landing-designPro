import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
  protected title = 'landing-designPro';

  tools = [
    {
      name: 'Gmail',
      icon: '/assets/icons/gmail.svg',
      description: 'Secure, smart, and easy to use email',
      color: '#EA4335'
    },
    {
      name: 'Drive',
      icon: '/assets/icons/google-drive.svg',
      description: 'Store, share, and collaborate on files',
      color: '#00AC47'
    },
    {
      name: 'Meet',
      icon: '/assets/icons/google-meet.svg',
      description: 'Premium video meetings for everyone',
      color: '#00897B'
    },
    {
      name: 'Calendar',
      icon: '/assets/icons/google-calendar.svg',
      description: 'Organize your schedule and share with others',
      color: '#4285F4'
    },
    {
      name: 'Chat',
      icon: '/assets/icons/google-chat-icon.svg',
      description: 'Message-based collaboration space',
      color: '#00AC47'
    },
    {
      name: 'Docs',
      icon: '/assets/icons/icons8-google-docs.svg',
      description: 'Create and edit documents',
      color: '#4285F4'
    },
    {
      name: 'Sheets',
      icon: '/assets/icons/icons8-google-sheets.svg',
      description: 'Create and edit spreadsheets',
      color: '#0F9D58'
    },
    {
      name: 'Slides',
      icon: '/assets/icons/icons8-google-slides.svg',
      description: 'Create and edit presentations',
      color: '#F4B400'
    }
  ];

  activeToolIndex: number | null = null;

  public carouselCards: Array<{image: string, icon: string, label: string, title: string, description: string}> = [
    {
      image: '/assets/calendar.png',
      icon: '/assets/icons/google-calendar.svg',
      label: 'Calendar',
      title: 'Simplify booking with appointment scheduling',
      description: 'Let customers book time with you directly within Google Calendar via a personal booking page.'
    },
    {
      image: '/assets/contract.png',
      icon: '/assets/icons/icons8-google-docs.svg',
      label: 'Docs',
      title: 'Streamline contract management with eSignature',
      description: 'Request electronic signatures and easily manage vendor agreements, customer contracts, and more.'
    },
    {
      image: '/assets/drive.png',
      icon: '/assets/icons/google-drive.svg',
      label: 'Drive',
      title: 'Securely store your data in the cloud',
      description: 'Store your data in Google\'s security-by-design cloud infrastructure, with up to 5TB per user.'
    },
    {
      image: '/assets/meet.png',
      icon: '/assets/icons/google-meet.svg',
      label: 'Meet',
      title: 'Connect seamlessly with video conferencing',
      description: 'Present professionally with high-quality video and noise cancellation. Record and transcribe to capture every detail.'
    },
    {
      image: '/assets/gemini.png',
      icon: '/assets/icons/gemini.svg',
      label: 'Gemini',
      title: 'Work smarter with AI',
      description: 'Craft compelling content, generate data insights, and conduct deep research with the help of AI.'
    }
  ];
  public carouselIndex: number = 0;

  public get visibleCarouselCards() {
    return this.carouselCards.slice(this.carouselIndex, this.carouselIndex + 3);
  }

  public nextCarousel() {
    console.log('Next arrow clicked', this.carouselIndex);
    if (this.carouselIndex < this.carouselCards.length - 3) {
      this.carouselIndex++;
    }
  }

  public prevCarousel() {
    console.log('Prev arrow clicked', this.carouselIndex);
    if (this.carouselIndex > 0) {
      this.carouselIndex--;
    }
  }

  setActiveTool(index: number) {
    this.activeToolIndex = index;
  }

  clearActiveTool() {
    this.activeToolIndex = null;
  }

  public isHeroChatDropdownOpen = false;

  public toggleHeroChatDropdown() {
    this.isHeroChatDropdownOpen = !this.isHeroChatDropdownOpen;
    console.log('Dropdown open:', this.isHeroChatDropdownOpen);
  }

  public isChatDropdownOpen = false;

  toggleChatDropdown(event: Event) {
    event.preventDefault();
    this.isChatDropdownOpen = !this.isChatDropdownOpen;
  }
} 