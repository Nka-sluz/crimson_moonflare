import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BioComponent } from './pages/bio/bio';
import { MusicComponent } from './pages/music/music';
import { LiveComponent } from './pages/live/live';
import { NewsComponent } from './pages/news/news';
import { NewsArticleComponent } from './pages/news-article/news-article';
import { ShopComponent } from './pages/shop/shop';
import { TicketCheckoutComponent } from './pages/ticket-checkout/ticket-checkout';
import { MerchDetailComponent } from './pages/merch-detail/merch-detail';
import { ContactComponent } from './pages/contact/contact';
import { PastShowComponent } from './pages/past-show/past-show';

export const routes: Routes = [
  { path: '',                redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',            component: HomeComponent           },
  { path: 'bio',             component: BioComponent            },
  { path: 'music',           component: MusicComponent          },
  { path: 'live',            component: LiveComponent           },
  { path: 'news',            component: NewsComponent           },
  { path: 'news/:id',        component: NewsArticleComponent    },
  { path: 'past-show/:id',   component: PastShowComponent       },
  { path: 'shop',            component: ShopComponent           },
  { path: 'tickets/:city',   component: TicketCheckoutComponent },
  { path: 'merch/:id',       component: MerchDetailComponent    },
  { path: 'contact',         component: ContactComponent        },
];
