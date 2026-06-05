import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private audio = inject(AudioService);

  ngOnInit(): void {
    // Start "Ignite the Wound" from 1:10 on every app load (browser autoplay permitting)
    this.audio.initiateAutostart(70);
  }
}
