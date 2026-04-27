import { Component } from '@angular/core';

interface Show {
  date: string;
  month: string;
  day: string;
  city: string;
  venue: string;
  country: string;
  status: 'available' | 'limited' | 'soldout';
  isFeatured?: boolean;
}

interface PastShow {
  date: string;
  city: string;
  venue: string;
  label: string;
}

@Component({
  selector: 'app-live',
  imports: [],
  templateUrl: './live.html',
  styleUrl: './live.css'
})
export class LiveComponent {
  shows: Show[] = [
    { date: '2026-06-14', month: 'Jun', day: '14', city: 'Berlin',    venue: 'Columbiahalle',       country: 'DE', status: 'available', isFeatured: true },
    { date: '2026-06-17', month: 'Jun', day: '17', city: 'Amsterdam', venue: 'Paradiso',             country: 'NL', status: 'available' },
    { date: '2026-06-20', month: 'Jun', day: '20', city: 'Paris',     venue: 'La Cigale',            country: 'FR', status: 'limited'   },
    { date: '2026-06-24', month: 'Jun', day: '24', city: 'London',    venue: 'O2 Forum Kentish Town',country: 'UK', status: 'limited'   },
    { date: '2026-06-27', month: 'Jun', day: '27', city: 'Brussels',  venue: 'Ancienne Belgique',    country: 'BE', status: 'available' },
    { date: '2026-06-30', month: 'Jun', day: '30', city: 'Zurich',    venue: 'Komplex 457',          country: 'CH', status: 'soldout'   },
    { date: '2026-07-02', month: 'Jul', day: '02', city: 'Vienna',    venue: 'Arena Wien',           country: 'AT', status: 'available' },
  ];

  pastShows: PastShow[] = [
    { date: 'Dec 2024', city: 'Zurich',  venue: 'Dynamo',    label: 'Debut Show'    },
    { date: 'Feb 2025', city: 'Basel',   venue: 'Kaserne',   label: 'EP Release'    },
    { date: 'Apr 2025', city: 'Bern',    venue: 'ISC Club',  label: 'Support Act'   },
    { date: 'May 2025', city: 'Geneva',  venue: "L'Usine",   label: 'Headline'      },
  ];
}
