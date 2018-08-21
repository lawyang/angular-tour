import { Injectable } from '@angular/core';


import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';

// Obsrvable
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return of(HEROES);
  }

  constructor() { }
}
