import { Routes } from '@angular/router';
import { BlogPage } from './blog.page';
import { ContactPage } from './contact.page';
import { HomePage } from './home.page';
import { PricingPage } from './pricing.page';
import { OurWorkPage } from './our-work.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: 'blog', component: BlogPage, title: 'Blog' },
  { path: 'contact', component: ContactPage, title: 'Contact Us' },
  { path: 'pricing', component: PricingPage, title: 'Pricing' },
  { path: 'our-work', component: OurWorkPage, title: 'Our Work' },
  // ...other routes
];
