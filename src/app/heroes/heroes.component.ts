import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [NgFor, HeroDetailsComponent],
})
export class HeroesComponent {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
  
}
