"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PHARMACIES = [
    { id: 1, name: 'CVS', address: 'Burke Centre Conservancy, 5711 Burke Center Parkway, Burke, VA, 22015', phone: '(703) 425-9032', hours: '8AM - 10PM' },
    { id: 2, name: 'Target', address: '10301 New Guinea Rd, Fairfax, VA 22032', phone: '(703) 764-5100', hours: '8AM - 11PM' },
    { id: 3, name: 'Giant', address: 'Burke Center, Burke, VA 22015', phone: '(703) 425-0362', hours: '9AM - 9PM' },
    { id: 4, name: 'Walgreen', address: 'Old Keene Mill Shopping Center, 8414 Old Keene Mill Rd a, Springfield, VA 22152', phone: '(703) 913-6712', hours: '8AM - 10PM' },
    { id: 5, name: 'Walmart', address: '6000 Burke Commons Rd, Burke, VA 22015', phone: '(703) 250-9282', hours: '9AM - 7PM' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Pharmacies Used";
        this.pharmacies = PHARMACIES;
    }
    AppComponent.prototype.onSelect = function (pharmacy) {
        this.selectedPharmacy = pharmacy;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1><h2>My Pharmacies</h2><ul class="pharmacies"><li *ngFor="let pharmacy of pharmacies" [class.selected]="pharmacy === selectedPharmacy" (click)="onSelect(pharmacy)"><span class="badge">{{pharmacy.id}}</span> {{pharmacy.name}} -- {{pharmacy.hours}}</li></ul><my-pharmacy-detail [pharmacy]="selectedPharmacy"></my-pharmacy-detail>',
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white; s\n  }\n    .pharmacies {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .pharmacies li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .pharmacies li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .pharmacies li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .pharmacies .text {\n    position: relative;\n    top: -3px;\n  }\n  .pharmacies .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  .pharmacies {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .pharmacies li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .pharmacies li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .pharmacies li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heropharmacieses .text {\n    position: relative;\n    top: -3px;\n  }\n  .pharmacies .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map