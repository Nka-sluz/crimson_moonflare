import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BioComponent } from './pages/bio/bio';
import { MusicComponent } from './pages/music/music';
import { LiveComponent } from './pages/live/live';
import { NewsComponent } from './pages/news/news';
import { ShopComponent } from './pages/shop/shop';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '',        redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',    component: HomeComponent    },
  { path: 'bio',     component: BioComponent     },
  { path: 'music',   component: MusicComponent   },
  { path: 'live',    component: LiveComponent    },
  { path: 'news',    component: NewsComponent    },
  { path: 'shop',    component: ShopComponent    },
  { path: 'contact', component: ContactComponent },
];
