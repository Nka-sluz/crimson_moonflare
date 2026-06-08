import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ImgLoadDirective } from '../../directives/img-load.directive';

interface PastShowDetail {
  id: number;
  date: string;
  city: string;
  venue: string;
  country: string;
  label: string;
  image: string;
  description: string[];
  relatedNewsId?: number;
  relatedNewsTitle?: string;
}

@Component({
  selector: 'app-past-show',
  imports: [RouterLink, ImgLoadDirective],
  templateUrl: './past-show.html',
  styleUrl: './past-show.css'
})
export class PastShowComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  show: PastShowDetail | null = null;

  shows: PastShowDetail[] = [
    {
      id: 1,
      date: 'Dec 14, 2024',
      city: 'Zurich',
      venue: 'Dynamo',
      country: 'CH',
      label: 'Debut Show',
      image: 'past-show-zurich.png',
      description: [
        'It started here. The first time Crimson Moonflare played in front of a crowd was at Dynamo in Zurich — a venue we\'d been to as fans more times than we can count.',
        'We played nine songs. The set list was almost entirely unreleased. The room was smaller than we hoped and packed tighter than we expected. By the third song the barrier had disappeared and everyone was in the same place.',
        'We were nervous. We were ready. We\'d never felt more like a band than we did that night.',
      ],
    },
    {
      id: 2,
      date: 'Feb 28, 2025',
      city: 'Basel',
      venue: 'Kaserne',
      country: 'CH',
      label: 'EP Release',
      image: 'past-show-basel.png',
      relatedNewsId: 5,
      relatedNewsTitle: 'EP Release Show — Basel, Kaserne — Feb 28',
      description: [
        'This was the show we threw to celebrate the announcement of Vein & Voltage. Kaserne in Basel holds about 400 people and we sold it out three days in advance.',
        'We played the full EP front to back — all five tracks — for the first time live. Seeing people sing lyrics they\'d never heard before, because they\'d learned them in the week since the announcement, was something we weren\'t prepared for.',
        'Two support acts joined us: a local hardcore duo and a post-rock three-piece from Bern. Both were exceptional. The room was theirs before it was ours.',
      ],
    },
    {
      id: 3,
      date: 'Apr 19, 2025',
      city: 'Bern',
      venue: 'ISC Club',
      country: 'CH',
      label: 'Support Act',
      image: 'past-show-bern.png',
      description: [
        'Supporting another band for the first time was humbling in the best way. ISC Club in Bern was a room we\'d never played, in front of an audience that hadn\'t come to see us.',
        'We had 30 minutes and a soundcheck that lasted 20. We played six songs. By the time we left the stage, people were asking the merch table who we were.',
        'Playing for an audience that doesn\'t know you yet is a different discipline. It\'s one of the most useful things a young band can do. We learned more from that 30 minutes than from any headlining show we\'d done.',
      ],
    },
    {
      id: 4,
      date: 'May 10, 2025',
      city: 'Geneva',
      venue: "L'Usine",
      country: 'CH',
      label: 'Headline',
      image: 'past-show-geneva.png',
      description: [
        'L\'Usine is one of those rooms that feels significant the moment you walk in. Old industrial space, raw concrete, a crowd that takes music seriously. We\'d been looking forward to this show for months.',
        'We headlined for the first time outside our home city. The EP was out. People had had time to sit with it, form opinions, come in with expectations. It\'s a different kind of pressure.',
        'The response was everything we could have hoped for. "Scarlet Static" brought the room to a near stop in the middle section — that weird, long part we almost cut from the record — and then it exploded. That moment alone was worth the whole drive to Geneva.',
      ],
    },
  ];

  ngOnInit() {
    this.route.paramMap.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(params => {
      const id = Number(params.get('id'));
      this.show = this.shows.find(s => s.id === id) ?? null;
    });
  }
}
