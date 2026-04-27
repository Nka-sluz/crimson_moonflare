import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  type: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    type: 'fan',
    message: '',
  };

  submitted = signal(false);

  submit(): void {
    this.submitted.set(true);
  }
}
