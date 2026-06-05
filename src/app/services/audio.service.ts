import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private audio: HTMLAudioElement = new Audio();

  currentTitle  = signal('Ignite the Wound');
  currentAlbum  = signal('Vein & Voltage');
  currentCover  = signal('music-vein-voltage-ep.png');
  isPlaying     = signal(false);
  progress      = signal(0);
  currentTimeStr = signal('0:00');

  /** Real durations keyed by track title, populated from audio metadata. */
  trackDurations = signal<Record<string, string>>({});

  hasAutostarted = false;

  private readonly files: Record<string, string> = {
    'Ignite the Wound': 'Ignite%20the%20Wound.mp3',
    'Scarlet Static':   'Scarlet%20Static.mp3',
    'Below the Signal': 'Below%20the%20Signal.mp3',
    'Glass Meridian':   'Glass%20Meridian.mp3',
    'The Last Weight':  'The%20Last%20Weight.mp3',
    'Hollow Signal':    'Hollow%20Signal.mp3',
  };

  private readonly covers: Record<string, string> = {
    'Vein & Voltage':   'music-vein-voltage-ep.png',
    'Scarlet Static':   'music-scarlet-static.png',
    'Hollow Signal':    'music-hollow-signal.png',
    'Ignite the Wound': 'music-ignite-the-wound.png',
  };

  private readonly albums: Record<string, string[]> = {
    'Vein & Voltage':   ['Ignite the Wound', 'Scarlet Static', 'Below the Signal', 'Glass Meridian', 'The Last Weight'],
    'Scarlet Static':   ['Scarlet Static'],
    'Hollow Signal':    ['Hollow Signal'],
    'Ignite the Wound': ['Ignite the Wound'],
  };

  constructor() {
    this.audio.addEventListener('play',  () => this.isPlaying.set(true));
    this.audio.addEventListener('pause', () => this.isPlaying.set(false));
    this.audio.addEventListener('ended', () => this.next());
    this.audio.addEventListener('timeupdate', () => {
      const cur = this.audio.currentTime;
      const dur = this.audio.duration;
      if (isFinite(dur) && dur > 0) {
        this.progress.set(cur / dur);
        this.currentTimeStr.set(this.fmt(cur));
      }
    });
    this.audio.addEventListener('durationchange', () => {
      const dur = this.audio.duration;
      if (isFinite(dur) && dur > 0) {
        this.trackDurations.update(d => ({ ...d, [this.currentTitle()]: this.fmt(dur) }));
      }
    });

    // Pre-load metadata for every track so durations are shown immediately on the music page
    for (const [title, file] of Object.entries(this.files)) {
      const probe = new Audio();
      probe.preload = 'metadata';
      probe.src = file;
      probe.addEventListener('durationchange', () => {
        if (isFinite(probe.duration) && probe.duration > 0) {
          this.trackDurations.update(d => ({ ...d, [title]: this.fmt(probe.duration) }));
        }
      }, { once: true });
    }

    // Pre-load the initial track so the mini player controls work from any page
    this.audio.src = this.files['Ignite the Wound'];
    this.audio.preload = 'metadata';
  }

  private fmt(secs: number): string {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  /** Called once on app init — seeks to startAt and begins playback on the first user gesture. */
  initiateAutostart(startAt: number): void {
    if (this.hasAutostarted) return;
    this.hasAutostarted = true;

    const attemptPlay = () => {
      this.audio.play().catch(() => {});
    };

    const seekAndPlay = () => {
      this.audio.currentTime = startAt;
      this.audio.play().catch(() => {
        // Browser blocked autoplay — start on the very first user interaction
        const onGesture = () => {
          document.removeEventListener('click',      onGesture, true);
          document.removeEventListener('keydown',    onGesture, true);
          document.removeEventListener('touchstart', onGesture, true);
          attemptPlay();
        };
        document.addEventListener('click',      onGesture, { capture: true });
        document.addEventListener('keydown',    onGesture, { capture: true });
        document.addEventListener('touchstart', onGesture, { capture: true });
      });
    };

    if (isFinite(this.audio.duration) && this.audio.duration > 0) {
      seekAndPlay();
    } else {
      this.audio.addEventListener('loadedmetadata', () => seekAndPlay(), { once: true });
    }
  }

  playTrack(title: string, albumName: string, startAt = 0): void {
    const file = this.files[title];
    if (!file) return;
    this.currentTitle.set(title);
    this.currentAlbum.set(albumName);
    this.currentCover.set(this.covers[albumName] ?? 'music-vein-voltage-ep.png');
    this.audio.src = file;
    if (startAt > 0) {
      const handler = () => {
        this.audio.currentTime = startAt;
        this.audio.play().catch(() => {});
        this.audio.removeEventListener('loadedmetadata', handler);
      };
      this.audio.addEventListener('loadedmetadata', handler);
      this.audio.load();
    } else {
      this.audio.play().catch(() => {});
    }
  }

  toggle(): void {
    if (this.audio.paused) {
      this.audio.play().catch(() => {});
    } else {
      this.audio.pause();
    }
  }

  next(): void {
    const tracks = this.albums[this.currentAlbum()];
    if (!tracks) return;
    const idx = tracks.indexOf(this.currentTitle());
    const nextIdx = idx >= 0 ? (idx + 1) % tracks.length : 0;
    this.playTrack(tracks[nextIdx], this.currentAlbum());
  }

  prev(): void {
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      return;
    }
    const tracks = this.albums[this.currentAlbum()];
    if (!tracks) return;
    const idx = tracks.indexOf(this.currentTitle());
    const prevIdx = idx > 0 ? idx - 1 : tracks.length - 1;
    this.playTrack(tracks[prevIdx], this.currentAlbum());
  }

  seekByRatio(ratio: number): void {
    if (isFinite(this.audio.duration) && this.audio.duration > 0) {
      this.audio.currentTime = ratio * this.audio.duration;
    }
  }
}
