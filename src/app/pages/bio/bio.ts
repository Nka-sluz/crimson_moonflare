import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImgLoadDirective } from '../../directives/img-load.directive';

@Component({
  selector: 'app-bio',
  imports: [RouterLink, ImgLoadDirective],
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class BioComponent {}
