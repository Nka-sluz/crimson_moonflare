import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private doc = inject(DOCUMENT);
  isHighContrast = signal(false);

  constructor() {
    try {
      const stored = localStorage.getItem('hc') === '1';
      this.isHighContrast.set(stored);
      if (stored) this.doc.documentElement.classList.add('high-contrast');
    } catch { /* ignore if localStorage unavailable */ }
  }

  toggle(): void {
    const next = !this.isHighContrast();
    this.isHighContrast.set(next);
    if (next) {
      this.doc.documentElement.classList.add('high-contrast');
    } else {
      this.doc.documentElement.classList.remove('high-contrast');
    }
    try { localStorage.setItem('hc', next ? '1' : '0'); } catch { /* ignore */ }
  }
}
