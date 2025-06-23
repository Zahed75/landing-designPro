import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
      icon: '/assets/icons/chat.svg',
      description: 'Message-based collaboration space',
      color: '#00AC47'
    },
    {
      name: 'Docs',
      icon: '/assets/icons/docs.svg',
      description: 'Create and edit documents',
      color: '#4285F4'
    },
    {
      name: 'Sheets',
      icon: '/assets/icons/sheets.svg',
      description: 'Create and edit spreadsheets',
      color: '#0F9D58'
    },
    {
      name: 'Slides',
      icon: '/assets/icons/slides.svg',
      description: 'Create and edit presentations',
      color: '#F4B400'
    }
  ];

  activeToolIndex: number | null = null;

  setActiveTool(index: number) {
    this.activeToolIndex = index;
  }

  clearActiveTool() {
    this.activeToolIndex = null;
  }
}
