import { Component } from '@angular/core';

export class Pharmacy{
    id: number;
    name: string;
    address: string;
    phone: string;
    hours: string;
}


const PHARMACIES : Pharmacy[] = [
  {id: 1, name: 'CVS', address: 'Burke Centre Conservancy, 5711 Burke Center Parkway, Burke, VA, 22015', phone:'(703) 425-9032',hours:'8AM - 10PM'},
  {id: 2, name: 'Target', address: '10301 New Guinea Rd, Fairfax, VA 22032', phone:'(703) 764-5100',hours:'8AM - 11PM'}, 
  {id: 3, name: 'Giant', address: 'Burke Center, Burke, VA 22015',phone:'(703) 425-0362',hours:'9AM - 9PM'}, 
  {id: 4, name: 'Walgreen', address: 'Old Keene Mill Shopping Center, 8414 Old Keene Mill Rd a, Springfield, VA 22152',phone:'(703) 913-6712',hours:'8AM - 10PM'},
  {id: 5, name: 'Walmart', address: '6000 Burke Commons Rd, Burke, VA 22015',phone:'(703) 250-9282',hours:'9AM - 7PM'}

];

@Component({
   selector: 'my-app',
 template: '<h1>{{title}}</h1><h2>My Pharmacies</h2><ul class="pharmacies"><li *ngFor="let pharmacy of pharmacies" [class.selected]="pharmacy === selectedPharmacy" (click)="onSelect(pharmacy)"><span class="badge">{{pharmacy.id}}</span> {{pharmacy.name}} -- {{pharmacy.hours}}</li></ul><div *ngIf="selectedPharmacy"><h2>{{selectedPharmacy.name}} details!</h2><div><label>Id: </label>{{selectedPharmacy.id}}</div><div><label>Name: </label><input [(ngModel)]="selectedPharmacy.name" placeholder="name"/></div><div><label>Address: </label>{{selectedPharmacy.address}}</div><div><label>Phone Number: </label>{{selectedPharmacy.phone}}</div><div><label>Hours: </label>{{selectedPharmacy.hours}}</div></div>',
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white; s
  }
    .pharmacies {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .pharmacies li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .pharmacies li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .pharmacies li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .pharmacies .text {
    position: relative;
    top: -3px;
  }
  .pharmacies .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  .pharmacies {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .pharmacies li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .pharmacies li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .pharmacies li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heropharmacieses .text {
    position: relative;
    top: -3px;
  }
  .pharmacies .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent { 

    title = "Pharmacies Used";

    pharmacies = PHARMACIES;

    selectedPharmacy: Pharmacy;

    onSelect(pharmacy: Pharmacy): void{
      this.selectedPharmacy = pharmacy;
    }

}
