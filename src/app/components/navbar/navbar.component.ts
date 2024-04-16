import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  isMenuHidden = true;

  showShearch = true;
  showShearchClose = false;

  showMenu = true;

  menuZIndex = 1000; // قيمة عالية لضمان ظهور القائمة فوق الصور


  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


 



  // ---------

}
