import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuClosed = true;


  //*********************THIS WILL BE DELETED LATER**********/
  constructor() {
    alert('Schaut bitte in die Console für Informationen')
    console.log('WICHTIG: Die Fotos werden natürlich noch geändert und in der About me Sektion wird noch ein richtiger Text eingefügt. Von den Projekten ist nur El Pollo Loco und der Pokedex verlinkt, um den FTP Server nicht zu sehr zu belasten');
  }
  //*********************THIS WILL BE DELETED LATER**********/


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
