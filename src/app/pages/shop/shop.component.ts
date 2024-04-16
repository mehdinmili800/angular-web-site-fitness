import { Component } from '@angular/core';
declare var Typed: any;


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor() {}

  ngOnInit(): void {
    const typed = new Typed(".auto-type", {
      strings: ["Coding", "Sleeping", "Eating"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  }
}
