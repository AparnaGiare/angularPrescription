import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
      <div><label>Address: </label>{{hero.address}}</div>
      <div><label>Phone Number: </label>{{hero.phone}}</div>
      <div><label>Hours: </label>{{hero.hours}}</div>
  </div>
`

})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}

