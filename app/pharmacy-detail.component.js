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
var pharmacy_1 = require('./pharmacy');
var PharmacyDetailComponent = (function () {
    function PharmacyDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pharmacy_1.Pharmacy)
    ], PharmacyDetailComponent.prototype, "pharmacy", void 0);
    PharmacyDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-pharmacy-detail',
            template: "\n  <div *ngIf=\"pharmacy\">\n    <h2>{{pharmacy.name}} details!</h2>\n    <div><label>Id: </label>{{pharmacy.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"pharmacy.name\" placeholder=\"name\"/>\n    </div>\n      <div><label>Address: </label>{{pharmacy.address}}</div>\n      <div><label>Phone Number: </label>{{pharmacy.phone}}</div>\n      <div><label>Hours: </label>{{pharmacy.hours}}</div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PharmacyDetailComponent);
    return PharmacyDetailComponent;
}());
exports.PharmacyDetailComponent = PharmacyDetailComponent;
//# sourceMappingURL=pharmacy-detail.component.js.map