import { Component, Input } from '@angular/core';
import { Pharmacy } from './pharmacy';

@Component({
  selector: 'my-pharmacy-detail',
  template: `
  <div *ngIf="pharmacy">
    <h2>{{pharmacy.name}} details!</h2>
    <div><label>Id: </label>{{pharmacy.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="pharmacy.name" placeholder="name"/>
    </div>
      <div><label>Address: </label>{{pharmacy.address}}</div>
      <div><label>Phone Number: </label>{{pharmacy.phone}}</div>
      <div><label>Hours: </label>{{pharmacy.hours}}</div>
  </div>
`

})
export class PharmacyDetailComponent {
  @Input()
  pharmacy: Pharmacy;
}

