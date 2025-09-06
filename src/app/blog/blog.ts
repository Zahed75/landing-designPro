import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#f7fafd] font-sans">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="flex flex-col items-center mb-10 animate-fade-in">
          <img src="/assets/icons/logo.jpg" alt="Logo" class="h-10 w-auto mb-3 drop-shadow-md">
          <h1 class="text-5xl font-extrabold text-center mb-2 tracking-tight text-[#202124]">
            The DesignPro <span class="text-[#1a73e8]">Workspace</span> blog
          </h1>
          <p class="text-lg text-[#5f6368] text-center max-w-2xl mt-2 mb-6">Inspiration, tips, and stories for creative professionals and teams. Discover the latest in design, productivity, and workspace culture.</p>
        </div>

        <!-- Featured Blog Post -->
        <div class="relative rounded-3xl overflow-hidden shadow-xl mb-16 animate-fade-in-up group featured-blog">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" alt="Featured" class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-tr from-[#1a73e8]/80 via-[#1a73e8]/30 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <span class="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-3 backdrop-blur">Productivity</span>
            <h2 class="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg animate-slide-in">Designing for Focus: How to Create a Workspace That Inspires</h2>
            <div class="flex items-center gap-3 mt-2 animate-fade-in-up">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-8 h-8 rounded-full border-2 border-white shadow">
              <span class="font-medium">Alex Carter</span>
              <span class="text-xs opacity-80">• 6 min read</span>
            </div>
          </div>
        </div>

        <!-- Blog Grid -->
        <div class="grid md:grid-cols-3 gap-10 animate-fade-in-up blog-grid">
          <div *ngFor="let blog of blogs; let i = index" class="blog-card bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 animate-fade-in-up" [style.animationDelay]="(i * 80) + 'ms'">
            <div class="relative">
              <img [src]="blog.image" [alt]="blog.title" class="w-full h-48 object-cover blog-card-img transition-transform duration-500">
              <span class="absolute top-4 left-4 bg-[#1a73e8] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">{{blog.tag}}</span>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="font-bold text-xl mb-2 text-[#202124] blog-card-title transition-colors duration-200">{{blog.title}}</h3>
              <p class="text-[#5f6368] text-sm mb-4 flex-1">{{blog.summary}}</p>
              <div class="flex items-center gap-3 mt-auto">
                <img [src]="blog.authorAvatar" class="w-8 h-8 rounded-full border border-[#e0e3e7]">
                <span class="font-medium text-[#202124]">{{blog.author}}</span>
                <span class="text-xs text-[#5f6368]">• {{blog.readTime}} min read</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Write Blog Button -->
        <button class="fixed bottom-8 right-8 z-50 bg-[#1a73e8] hover:bg-[#1765c1] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl text-3xl animate-fade-in-up transition-all duration-300 group">
          <span class="sr-only">Write a Blog</span>
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in { animation: fadeIn 1s cubic-bezier(0.4,0,0.2,1) both; }
    .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1) both; }
    .animate-slide-in { animation: slideIn 1.2s cubic-bezier(0.4,0,0.2,1) both; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideIn { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
    .blog-card {
      cursor: pointer;
      box-shadow: 0 4px 24px 0 rgba(26,115,232,0.08), 0 1.5px 6px 0 rgba(60,64,67,0.10);
      transition: box-shadow 0.3s, transform 0.3s, background 0.3s;
    }
    .blog-card:hover {
      box-shadow: 0 12px 32px 0 rgba(26,115,232,0.13), 0 2px 8px 0 rgba(60,64,67,0.10);
      background: #f5faff;
      transform: translateY(-8px) scale(1.03);
      z-index: 2;
    }
    .blog-card:hover .blog-card-title {
      color: #1a73e8;
    }
    .blog-card-img {
      transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
    }
    .blog-card:hover .blog-card-img {
      transform: scale(1.07) rotate(-1deg);
    }
    .featured-blog:hover img {
      transform: scale(1.08) rotate(1deg);
      transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
    }
    .blog-grid {
      animation: fadeInUp 1.2s cubic-bezier(0.4,0,0.2,1) both;
    }
  `]
})
export class BlogPage {
  blogs = [
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      tag: 'Design',
      title: '10 UI Trends to Watch in 2024',
      summary: 'Explore the latest user interface trends that are shaping the future of digital products and experiences.',
      author: 'Maya Lin',
      authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      readTime: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      tag: 'Productivity',
      title: 'Remote Work: How to Stay Creative Anywhere',
      summary: 'Tips and tools for keeping your creative spark alive while working from home or on the go.',
      author: 'James Lee',
      authorAvatar: 'https://randomuser.me/api/portraits/men/65.jpg',
      readTime: 4
    },
    {
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
      tag: 'Inspiration',
      title: 'How to Build a Portfolio That Gets You Hired',
      summary: 'Stand out to employers and clients with a portfolio that showcases your best work and personality.',
      author: 'Priya Patel',
      authorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      readTime: 6
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      tag: 'Workspace',
      title: 'Minimalist Desk Setups for Maximum Focus',
      summary: 'Discover how a clean, organized workspace can boost your productivity and creativity.',
      author: 'Liam Smith',
      authorAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
      readTime: 3
    },
    {
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      tag: 'Teamwork',
      title: 'Collaboration Tools Every Designer Should Know',
      summary: 'A roundup of the best digital tools for seamless teamwork and project management.',
      author: 'Sara Gomez',
      authorAvatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      readTime: 5
    },
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      tag: 'AI',
      title: 'How AI is Changing the Creative Process',
      summary: 'From idea generation to final design, see how artificial intelligence is transforming creative work.',
      author: 'Ethan Brown',
      authorAvatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      readTime: 7
    },
    {
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      tag: 'Career',
      title: 'From Freelancer to Agency: Scaling Your Design Business',
      summary: 'Practical advice for growing your design career from solo work to leading a team or agency.',
      author: 'Olivia Chen',
      authorAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      readTime: 6
    },
    {
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
      tag: 'Tips',
      title: '5 Quick Ways to Beat Creative Block',
      summary: 'Simple strategies to get unstuck and find inspiration when you need it most.',
      author: 'Noah Kim',
      authorAvatar: 'https://randomuser.me/api/portraits/men/23.jpg',
      readTime: 3
    }
  ];
} 