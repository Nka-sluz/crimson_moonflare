import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImgLoadDirective } from '../../directives/img-load.directive';

interface MerchProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  isNew?: boolean;
  image: string;
  description: string;
  sizes?: string[];
}

@Component({
  selector: 'app-merch-detail',
  imports: [RouterLink, FormsModule, ImgLoadDirective],
  templateUrl: './merch-detail.html',
  styleUrl: './merch-detail.css'
})
export class MerchDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);

  product: MerchProduct | null = null;
  submitted = signal(false);
  nameTouched  = signal(false);
  emailTouched = signal(false);

  selectedSize = signal('M');
  quantity = signal(1);
  name = '';
  email = '';

  get emailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
  }

  products: MerchProduct[] = [
    {
      id: 1,
      name: 'Vein & Voltage Tee',
      price: 35,
      category: 'Apparel',
      isNew: true,
      image: 'merch-vein-voltage-tee.png',
      description: 'Official Vein & Voltage debut EP tee. Screen-printed on heavyweight 100% organic cotton. Oversized fit — size down if you want a regular cut.',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 2,
      name: 'Crimson Moonflare Hoodie',
      price: 65,
      category: 'Apparel',
      image: 'merch-crimson-hoodie.png',
      description: 'The official Crimson Moonflare logo hoodie. 400gsm fleece, kangaroo pocket, embroidered chest logo. Runs true to size.',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 3,
      name: 'Tour 2026 Tee',
      price: 32,
      category: 'Apparel',
      isNew: true,
      image: 'merch-tour-2026-tee.png',
      description: 'European Tour 2026 shirt featuring all tour dates on the back. Limited run — only available while on tour and in the online shop through July.',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 4,
      name: 'Logo Tee — Black',
      price: 28,
      category: 'Apparel',
      image: 'merch-logo-tee.png',
      description: 'The essential. Clean Crimson Moonflare logo on the chest, white ink on black. Boxy fit, 100% cotton.',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 5,
      name: 'Vein & Voltage Poster (A2)',
      price: 18,
      category: 'Accessories',
      image: 'merch-vv-poster.png',
      description: 'A2 (42×59cm) art print on 200gsm uncoated stock. The official Vein & Voltage EP artwork. Ships in a protective tube.',
    },
    {
      id: 6,
      name: 'Enamel Pin Set',
      price: 14,
      category: 'Accessories',
      image: 'merch-enamel-pins.png',
      description: 'Set of 3 hard enamel pins: the Crimson Moon logo, a miniature record, and the tour 2026 crest. Each pin is 3–4cm.',
    },
    {
      id: 7,
      name: 'EP + Tee Bundle',
      price: 48,
      category: 'Bundle',
      isNew: true,
      image: 'merch-ep-tee-bundle.png',
      description: 'Vein & Voltage digital download code + a Vein & Voltage Tee. Pick your tee size below. Best value in the shop.',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
  ];

  total = computed(() => (this.product?.price ?? 0) * this.quantity());

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id) ?? null;
    if (this.product?.sizes?.length) {
      this.selectedSize.set(this.product.sizes[2] ?? this.product.sizes[0]);
    }
  }

  decrement() { if (this.quantity() > 1) this.quantity.update(q => q - 1); }
  increment() { if (this.quantity() < 10) this.quantity.update(q => q + 1); }

  purchase() {
    this.nameTouched.set(true);
    this.emailTouched.set(true);
    if (this.name.trim() && this.emailValid) {
      this.submitted.set(true);
    }
  }
}
