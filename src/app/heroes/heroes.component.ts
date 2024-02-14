import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [NgFor, HeroDetailsComponent],
})
export class HeroesComponent {
  heroes = HEROES;
  
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
