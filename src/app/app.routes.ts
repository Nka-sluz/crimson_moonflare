import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BioComponent } from './pages/bio/bio';
import { MusicComponent } from './pages/music/music';

export const routes: Routes = [
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'bio',   component: BioComponent },
  { path: 'music', component: MusicComponent },
];
