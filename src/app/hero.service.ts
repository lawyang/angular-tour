import { Injectable } from '@angular/core';


import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';

// Obsrvable
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    // TODO: send the message _after_ fetching heroes
    this.messageService.add('HeroService: Fetched Heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
