import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  veggies;
  message: string;
  newVegName;
  newVegPrice;
  toggleFlag;
  btnText: string;

  constructor() { }

  ngOnInit() {
    this.veggies = [
      { name: 'Tomato', price: 15.0 },
      { name: 'Potato', price: 20.0 },
      { name: 'Beans', price: 40.0 },
      { name: 'Bottle Gourd', price: 35.0 },
      { name: 'Cauliflower', price: 40.0 }
    ];

    this.message = 'Wow';
    this.toggleFlag = false;
    this.btnText = "Show Form";
  }

  clickMe() {
    alert('OUCH!! That hurts.');
  }

  addVeg() {
    if (this.newVegName && this.newVegPrice) {
      this.veggies.push({
        name: this.newVegName,
        price: this.newVegPrice
      });
      this.newVegName = this.newVegPrice = '';
    }
  }

  deleteVeg(index) {
    this.veggies.splice(index, 1);
  }

  toggleForm() {
    this.toggleFlag = !this.toggleFlag;
    this.btnText = (this.toggleFlag) ? 'Hide Form' : 'Show Form';
  }
}
