import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class HeroDetailsComponent {
  @Input() hero?: Hero;
}
