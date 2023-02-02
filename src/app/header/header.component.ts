import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuClosed = true;

  toggleMenu() {
    if (this.menuClosed) {
      document.getElementById('menu').classList.add('menu-slide');
      this.menuClosed = false;

    } else {
      document.getElementById('menu').classList.remove('menu-slide');
      this.menuClosed = true;
    }
  }
}
