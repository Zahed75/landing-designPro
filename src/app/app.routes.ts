import { Routes } from '@angular/router';



import { PricingPage } from './pricing/pricing';
import { AboutPage } from './about/about';
import { BlogPage } from './blog/blog';
import { Contatc } from './contatc/contatc';
import { HomePage } from './home/home';
import { OurWorkPage } from './our-work/our-work';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: 'about', component: AboutPage, title: 'About Us' },
  { path: 'blog', component: BlogPage, title: 'Blog' },
  { path: 'contact', component: Contatc, title: 'Contact Us' },
  { path: 'pricing', component: PricingPage, title: 'Pricing' },
  { path: 'our-work', component: OurWorkPage, title: 'Our Work' },
  
];
