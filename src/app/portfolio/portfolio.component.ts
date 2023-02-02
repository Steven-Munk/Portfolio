import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
    {
      name: 'Join',
      foundation: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'assets/imgs/join_img.png',
      imgLeft: true
    },
    {
      name: 'El Pollo Loco',
      foundation: 'JavaScript | HTML | CSS',
      description: 'simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      img: 'assets/imgs/el_pollo_loco_img.png',
      imgLeft: false
    },
    {
      name: 'Simple CRM',
      foundation: 'Angular | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      img: 'assets/imgs/placeholder_profile.png',
      imgLeft: true
    },
    {
      name: 'Pokédex',
      foundation: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      img: 'assets/imgs/pokedex_img.png',
      imgLeft: false
    },
    {
      name: 'Ring of Fire',
      foundation: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod ea placeat architecto ad natus',
      img: 'assets/imgs/placeholder_profile.png',
      imgLeft: true
    },
  ];
}
