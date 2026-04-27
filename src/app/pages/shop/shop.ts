import { Component, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  isNew?: boolean;
  isSoldOut?: boolean;
}

interface ShopTicket {
  month: string;
  day: string;
  city: string;
  venue: string;
  price: string;
  status: 'available' | 'limited' | 'soldout';
}

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class ShopComponent {
  activeTab = signal<'merch' | 'tickets'>('merch');

  products: Product[] = [
    { id: 1, name: 'Vein & Voltage Tee',                      price: 'CHF 35', category: 'Apparel',     isNew: true  },
    { id: 2, name: 'Crimson Moonflare Hoodie',                price: 'CHF 65', category: 'Apparel'                  },
    { id: 3, name: 'Tour 2026 Tee',                           price: 'CHF 32', category: 'Apparel',     isNew: true  },
    { id: 4, name: 'Logo Tee — Black',                        price: 'CHF 28', category: 'Apparel'                  },
    { id: 5, name: 'Vein & Voltage Poster (A2)',              price: 'CHF 18', category: 'Accessories'              },
    { id: 6, name: 'Enamel Pin Set',                          price: 'CHF 14', category: 'Accessories'              },
    { id: 7, name: 'EP + Tee Bundle',                         price: 'CHF 48', category: 'Bundle',      isNew: true  },
    { id: 8, name: 'VIP Pack — Ticket + Hoodie + Signed Poster', price: 'CHF 110', category: 'Bundle'               },
  ];

  tickets: ShopTicket[] = [
    { month: 'Jun', day: '14', city: 'Berlin',    venue: 'Columbiahalle',        price: 'CHF 28', status: 'available' },
    { month: 'Jun', day: '17', city: 'Amsterdam', venue: 'Paradiso',             price: 'CHF 25', status: 'available' },
    { month: 'Jun', day: '20', city: 'Paris',     venue: 'La Cigale',            price: 'CHF 30', status: 'limited'   },
    { month: 'Jun', day: '24', city: 'London',    venue: 'O2 Forum Kentish Town',price: 'CHF 32', status: 'limited'   },
    { month: 'Jun', day: '27', city: 'Brussels',  venue: 'Ancienne Belgique',    price: 'CHF 22', status: 'available' },
    { month: 'Jun', day: '30', city: 'Zurich',    venue: 'Komplex 457',          price: 'CHF 26', status: 'soldout'   },
    { month: 'Jul', day: '02', city: 'Vienna',    venue: 'Arena Wien',           price: 'CHF 24', status: 'available' },
  ];

  setTab(tab: 'merch' | 'tickets'): void {
    this.activeTab.set(tab);
  }
}
