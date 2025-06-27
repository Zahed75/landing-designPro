import { Routes } from '@angular/router';
import { BlogPage } from './blog.page';
import { ContactPage } from './contact.page';
import { HomePage } from './home.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'blog', component: BlogPage },
  { path: 'contact', component: ContactPage },
  // ...other routes
];
