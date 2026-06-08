import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { ThemeService } from '../../services/theme.service';
import { ImgLoadDirective } from '../../directives/img-load.directive';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, ImgLoadDirective],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class NavComponent {
  isOpen = signal(false);
  audio  = inject(AudioService);
  theme  = inject(ThemeService);

  toggle(): void { this.isOpen.update(v => !v); }
  close():  void { this.isOpen.set(false); }

  onSeek(event: MouseEvent): void {
    const bar = event.currentTarget as HTMLElement;
    const ratio = event.offsetX / bar.offsetWidth;
    this.audio.seekByRatio(Math.max(0, Math.min(1, ratio)));
  }
}
