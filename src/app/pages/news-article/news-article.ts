import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';
import { ImgLoadDirective } from '../../directives/img-load.directive';

interface NewsArticle {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  content: string[];
  isFeatured?: boolean;
}

@Component({
  selector: 'app-news-article',
  imports: [RouterLink, ImgLoadDirective],
  templateUrl: './news-article.html',
  styleUrl: './news-article.css'
})
export class NewsArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  article: NewsArticle | null = null;
  relatedArticles: NewsArticle[] = [];
  ref: string | null = null;

  get backLink(): { label: string; path: string } {
    if (this.ref === 'bio')  return { label: 'Back to Who We Are', path: '/bio' };
    if (this.ref === 'live') return { label: 'Back to Live',        path: '/live' };
    return { label: 'Back to News', path: '/news' };
  }

  articles: NewsArticle[] = [
    {
      id: 1,
      date: 'May 12, 2025',
      category: 'Release',
      title: 'Vein & Voltage — Our Debut EP Is Out Now',
      excerpt: 'Five tracks. No filler. Recorded in three weeks and mixed in one sleepless sprint. Everything we\'ve been building toward is in these songs.',
      isFeatured: true,
      image: 'news-ep-release.png',
      content: [
        'Today is the day. Vein & Voltage, our debut EP, is out on every platform. Five tracks recorded in three weeks at Black Room Studio in Basel, mixed and mastered by Tobia Grimm over one sleepless weekend in April.',
        'We didn\'t set out to make something polished. We set out to make something honest. Every take you hear on this EP is either the first or second take we recorded — nothing was over-produced, nothing was safety-netted into oblivion.',
        '"Ignite the Wound" opens things like a punch to the chest. "Scarlet Static" follows and slows it down just enough to let you catch your breath before we take it from you again. The title track, "Vein & Voltage," was the last song we wrote and the first one that truly felt like us.',
        'Stream it, buy it, share it. Tell us what you think. This is just the beginning.',
      ],
    },
    {
      id: 2,
      date: 'Apr 28, 2025',
      category: 'Tour',
      title: 'European Tour 2026 Announced — 12 Cities',
      excerpt: 'We\'re taking the show across Europe this summer. Berlin, London, Paris, Amsterdam, and more. Tickets go on sale Friday.',
      image: 'news-tour-announcement.png',
      content: [
        'We\'ve been sitting on this for months and we\'re done keeping it quiet: Crimson Moonflare is going on tour across Europe in summer 2026. Twelve cities. Seven weeks. One absolute sprint from June to July.',
        'The full routing: Berlin, Amsterdam, Paris, London, Brussels, Zurich, Vienna, and five more cities to be announced in the coming weeks. We\'re adding support acts soon — more on that shortly.',
        'Tickets go on sale this Friday at 10am CET via our shop. Fan club presale opens Wednesday with an exclusive early access code — check your email if you\'re signed up.',
        'This is the first proper headline tour we\'ve done and we\'re treating every show like it might be our last. Don\'t sleep on it.',
      ],
    },
    {
      id: 3,
      date: 'Apr 3, 2025',
      category: 'Behind the Scenes',
      title: 'Recording Diary: How "Ignite the Wound" Came Together',
      excerpt: 'Ash walks through the writing process for the EP opener — from a voice memo at 2am to the final take at the studio.',
      image: 'news-recording-diary.png',
      content: [
        'Ash here. I want to walk you through how "Ignite the Wound" went from a half-remembered idea to the track that opens Vein & Voltage.',
        'It started as a voice memo recorded at 2:17am on a Tuesday in January. I\'d been trying to write a riff for weeks and nothing stuck. Then I woke up mid-dream with a melody, grabbed my phone before I forgot it, and hummed the whole thing into a voice note while half asleep. I listened to it the next morning and it was exactly what I\'d been looking for.',
        'We arranged it as a band over two rehearsals. Nico rewrote the drum pattern three times before landing on the version you hear on the track. The outro — the big, slow, devastating part — that was Remy\'s idea, pitched in about ten minutes before we wrapped a session.',
        'The studio take was recorded in one afternoon. First take wasn\'t quite there. Second take nailed it. We kept the second take. No overdubs on the guitars. What you\'re hearing is three people playing together in a room, which is exactly what it was always supposed to be.',
      ],
    },
    {
      id: 8,
      date: 'Mar 20, 2025',
      category: 'Band Update',
      title: 'Press Shoot 2025 — Behind the Camera',
      excerpt: 'We did our first proper press photo session. What we were going for, how it went, and why we almost scrapped half the shots.',
      image: 'promo-press.png',
      content: [
        'We\'ve been putting off a proper press photo shoot since we started. For most of our first year, our only promo images were things taken by friends on phones at rehearsals and after shows. It worked. But it also stopped working.',
        'In March we went into a studio in Zurich with photographer Lena Voss for a full day. We\'d spent a week beforehand arguing about what we wanted it to look like. The short version: not polished, not posed, not like a band that\'s been media-trained into having the same expression in every shot.',
        'The session ran about seven hours. We shot in the studio and on the street outside. Lena had a way of shooting mid-movement — while we were adjusting a strap, talking to each other, looking away — that captured something a posed shot never quite does.',
        'We almost scrapped about 40% of what we shot that day. Kept the ones where we looked like ourselves. If you\'ve seen the new press images, you\'ve seen what survived.',
      ],
    },
    {
      id: 4,
      date: 'Mar 15, 2025',
      category: 'Release',
      title: '"Scarlet Static" Out Now — Our Second Single',
      excerpt: 'The bridge between the debut single and the full EP. Louder, stranger, and a bit more uncomfortable — exactly how we wanted it.',
      image: 'news-scarlet-static.png',
      content: [
        '"Scarlet Static" is out now. It\'s the second single before the EP drops in May and it\'s the track we were most nervous about sharing.',
        'It\'s louder than "Ignite the Wound." Stranger. There\'s a section in the middle that we almost cut three times because it felt too weird, too long, too indulgent. We kept it every time. Now we think it might be the best thirty seconds on the whole record.',
        'The visuals are a lo-fi live recording shot in Basel by our friend Leo Müller. We love it. It captures something that polished music videos never quite get: the feeling of actually being there in a small room while something is being made.',
        'Listen to Scarlet Static on all platforms. EP arrives May 12.',
      ],
    },
    {
      id: 5,
      date: 'Feb 10, 2025',
      category: 'Announcement',
      title: 'EP Release Show — Basel, Kaserne — Feb 28',
      excerpt: 'We\'re playing our first proper headline show to celebrate the EP announcement. Doors at 8. Support acts TBA.',
      image: 'news-ep-show-announcement.png',
      content: [
        'We\'re playing our first proper headline show on February 28th at Kaserne in Basel. Doors at 8pm, we\'re on at 9:30.',
        'This show is to celebrate the announcement of Vein & Voltage, our debut EP, which drops May 12th. We\'re playing the whole thing front to back, plus a few tracks that haven\'t been released yet and might not be for a while.',
        'Support acts are TBA but we\'re announcing them soon. Tickets are CHF 12 at the door, CHF 9 in advance through Kaserne\'s box office. It\'s a small room. We\'ve sold half the capacity already and we haven\'t even posted this yet.',
        'If you\'re in Basel or close enough to get there on a Friday night — come. We promise it\'ll be worth it.',
      ],
    },
    {
      id: 7,
      date: 'Dec 16, 2024',
      category: 'Show Recap',
      title: 'First Night: Our Debut Show at Dynamo, Zurich',
      excerpt: 'Nine songs, one barrier that disappeared by the third track, and a room full of people who showed up for a band they\'d only heard online.',
      image: 'stage-live.png',
      content: [
        'We played our first show on December 14th at Dynamo in Zurich. Nine songs. Thirty-five minutes. The room held maybe 200 people and it was full.',
        'We\'d rehearsed obsessively for weeks. We knew the songs. What we didn\'t know was how it would feel to actually stand there with the lights on us and people looking back. That part isn\'t rehearsable.',
        'By the third song, something shifted. The barrier between the stage and the floor — there wasn\'t one, not really, but there\'s always that invisible line at the start of a show — it disappeared. People moved forward. The energy in the room changed. We\'d been warned about this by every band we\'d talked to: the moment a show stops being a performance and starts being something shared.',
        'We\'ve played bigger shows since. More polished setups, better monitors, proper lighting rigs. None of them have felt quite like that first night at Dynamo. We\'re glad we held onto the memory before it got too far away.',
      ],
    },
    {
      id: 6,
      date: 'Nov 22, 2024',
      category: 'Release',
      title: '"Ignite the Wound" — Our First Single Is Out',
      excerpt: 'The first track we ever let out into the world. We wrote it in the van on the way back from our first rehearsal and never changed a word.',
      image: 'news-first-single.png',
      content: [
        '"Ignite the Wound" is out now. It\'s the first song Crimson Moonflare has ever released. We wrote it in the van on the way back from our very first rehearsal in October.',
        'We didn\'t know we were writing our debut single. We thought we were killing time on a forty-minute drive. Ash had a riff. Nico started beatboxing a pattern. Remy wrote the lyrics on his phone in the passenger seat. By the time we pulled up to the venue we had a song.',
        'We recorded it two weeks later. We\'ve never changed a single word or note from that van session. What you\'re hearing is exactly what it was the night we wrote it.',
        'Tell a friend. Stream it loud. More coming soon.',
      ],
    },
  ];

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(([params, queryParams]) => {
      const id = Number(params.get('id'));
      this.ref = queryParams.get('ref');
      this.article = this.articles.find(a => a.id === id) ?? null;
      this.relatedArticles = this.articles.filter(a => a.id !== id).slice(0, 3);
    });
  }
}
