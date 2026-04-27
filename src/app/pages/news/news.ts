import { Component } from '@angular/core';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  isFeatured?: boolean;
}

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class NewsComponent {
  news: NewsItem[] = [
    {
      id: 1,
      date: 'May 12, 2025',
      category: 'Release',
      title: 'Vein & Voltage — Our Debut EP Is Out Now',
      excerpt: 'Five tracks. No filler. Recorded in three weeks and mixed in one sleepless sprint. Everything we\'ve been building toward is in these songs.',
      isFeatured: true,
    },
    {
      id: 2,
      date: 'Apr 28, 2025',
      category: 'Tour',
      title: 'European Tour 2026 Announced — 12 Cities',
      excerpt: 'We\'re taking the show across Europe this summer. Berlin, London, Paris, Amsterdam, and more. Tickets go on sale Friday.',
    },
    {
      id: 3,
      date: 'Apr 3, 2025',
      category: 'Behind the Scenes',
      title: 'Recording Diary: How "Ignite the Wound" Came Together',
      excerpt: 'Ash walks through the writing process for the EP opener — from a voice memo at 2am to the final take at the studio.',
    },
    {
      id: 4,
      date: 'Mar 15, 2025',
      category: 'Release',
      title: '"Scarlet Static" Out Now — Our Second Single',
      excerpt: 'The bridge between the debut single and the full EP. Louder, stranger, and a bit more uncomfortable — exactly how we wanted it.',
    },
    {
      id: 5,
      date: 'Feb 10, 2025',
      category: 'Announcement',
      title: 'EP Release Show — Basel, Kaserne — Feb 28',
      excerpt: 'We\'re playing our first proper headline show to celebrate the EP announcement. Doors at 8. Support acts TBA.',
    },
    {
      id: 6,
      date: 'Nov 22, 2024',
      category: 'Release',
      title: '"Ignite the Wound" — Our First Single Is Out',
      excerpt: 'The first track we ever let out into the world. We wrote it in the van on the way back from our first rehearsal and never changed a word.',
    },
  ];

  get featuredPost(): NewsItem {
    return this.news.find(n => n.isFeatured) ?? this.news[0];
  }

  get otherPosts(): NewsItem[] {
    return this.news.filter(n => !n.isFeatured);
  }
}
