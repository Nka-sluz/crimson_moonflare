import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Show {
  city: string;
  country: string;
  venue: string;
  month: string;
  day: string;
  year: string;
  basePrice: number;
  vipPrice: number;
  status: 'available' | 'limited' | 'soldout';
}

@Component({
  selector: 'app-ticket-checkout',
  imports: [RouterLink, FormsModule],
  templateUrl: './ticket-checkout.html',
  styleUrl: './ticket-checkout.css'
})
export class TicketCheckoutComponent implements OnInit {
  private route = inject(ActivatedRoute);

  show: Show | null = null;
  submitted    = signal(false);
  nameTouched  = signal(false);
  emailTouched = signal(false);

  ticketType = signal<'general' | 'vip'>('general');
  quantity = signal(2);
  name = '';
  email = '';

  get emailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
  }

  shows: Show[] = [
    { city: 'Berlin',    country: 'Germany',    venue: 'Columbiahalle',        month: 'Jun', day: '14', year: '2026', basePrice: 28, vipPrice: 58, status: 'available' },
    { city: 'Amsterdam', country: 'Netherlands', venue: 'Paradiso',             month: 'Jun', day: '17', year: '2026', basePrice: 25, vipPrice: 52, status: 'available' },
    { city: 'Paris',     country: 'France',      venue: 'La Cigale',            month: 'Jun', day: '20', year: '2026', basePrice: 30, vipPrice: 60, status: 'limited'   },
    { city: 'London',    country: 'UK',          venue: 'O2 Forum Kentish Town',month: 'Jun', day: '24', year: '2026', basePrice: 32, vipPrice: 65, status: 'limited'   },
    { city: 'Brussels',  country: 'Belgium',     venue: 'Ancienne Belgique',    month: 'Jun', day: '27', year: '2026', basePrice: 22, vipPrice: 48, status: 'available' },
    { city: 'Zurich',    country: 'Switzerland', venue: 'Komplex 457',          month: 'Jun', day: '30', year: '2026', basePrice: 26, vipPrice: 54, status: 'soldout'   },
    { city: 'Vienna',    country: 'Austria',     venue: 'Arena Wien',           month: 'Jul', day: '02', year: '2026', basePrice: 24, vipPrice: 50, status: 'available' },
  ];

  unitPrice = computed(() => {
    if (!this.show) return 0;
    return this.ticketType() === 'vip' ? this.show.vipPrice : this.show.basePrice;
  });

  total = computed(() => this.unitPrice() * this.quantity());

  ngOnInit() {
    const city = this.route.snapshot.paramMap.get('city');
    this.show = this.shows.find(s => s.city === city) ?? null;
  }

  setType(type: 'general' | 'vip') { this.ticketType.set(type); }

  decrement() { if (this.quantity() > 1) this.quantity.update(q => q - 1); }
  increment() { if (this.quantity() < 8) this.quantity.update(q => q + 1); }

  checkout() {
    this.nameTouched.set(true);
    this.emailTouched.set(true);
    if (this.name.trim() && this.emailValid) {
      this.submitted.set(true);
    }
  }
}
