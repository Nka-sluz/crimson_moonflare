import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class NavComponent {
  isOpen = signal(false);
  toggle(): void { this.isOpen.update(v => !v); }
  close(): void  { this.isOpen.set(false); }
}
