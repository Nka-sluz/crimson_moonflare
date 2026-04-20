import { Component, signal } from '@angular/core';
interface Track {
  num: string;
  title: string;
  duration: string;
  tag?: string;
  playing?: boolean;
}

interface Release {
  id: number;
  name: string;
  type: string;
  date: string;
  trackCount?: number;
  totalDuration?: string;
  genre?: string;
  description?: string;
  isNew?: boolean;
  tracks: Track[];
}

@Component({
  selector: 'app-music',
  imports: [],
  templateUrl: './music.html',
  styleUrl: './music.css'
})
export class MusicComponent {
  releases: Release[] = [
    {
      id: 1,
      name: 'Vein & Voltage',
      type: 'EP',
      date: 'May 2025',
      trackCount: 5,
      totalDuration: '18 min',
      genre: 'Metalcore / Alternative',
      description: 'The debut EP. Five tracks that outline exactly what Crimson Moonflare is — loud, honest, and unafraid of being uncomfortable. Recorded in a basement, mixed like it belongs in an arena.',
      isNew: true,
      tracks: [
        { num: '01', title: 'Ignite the Wound', duration: '3:42', tag: 'Single', playing: true },
        { num: '02', title: 'Scarlet Static',   duration: '4:11' },
        { num: '03', title: 'Below the Signal', duration: '3:58' },
        { num: '04', title: 'Glass Meridian',   duration: '3:27' },
        { num: '05', title: 'The Last Weight',  duration: '3:09' },
      ]
    },
    {
      id: 2,
      name: 'Scarlet Static',
      type: 'Single',
      date: 'Mar 2025',
      tracks: [
        { num: '01', title: 'Scarlet Static', duration: '4:11', playing: true },
      ]
    },
    {
      id: 3,
      name: 'Hollow Signal',
      type: 'Single',
      date: 'Dec 2024',
      tracks: [
        { num: '01', title: 'Hollow Signal', duration: '3:55', playing: true },
      ]
    },
    {
      id: 4,
      name: 'Ignite the Wound',
      type: 'Single',
      date: 'Nov 2024',
      tracks: [
        { num: '01', title: 'Ignite the Wound', duration: '3:42', tag: 'Single', playing: true },
      ]
    },
  ];

  selectedId = signal<number>(1);

  get selected(): Release {
    return this.releases.find(r => r.id === this.selectedId()) ?? this.releases[0];
  }

  select(id: number): void {
    this.selectedId.set(id);
  }
}
