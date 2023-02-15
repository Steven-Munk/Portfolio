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
      img: '../assets/imgs/join_img.png',
      github:'https://github.com/Steven-Munk/Join',
      liveTest:'https://steven-munk.de/Join/index.html',
      imgLeft: true
    },
    {
      name: 'El Pollo Loco',
      foundation: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to defeat Fred, the crazy chicken.',
      img: '../assets/imgs/el_pollo_loco_img.png',
      github:'https://github.com/Steven-Munk/Pollo-Loco',
      liveTest:'https://steven-munk.de/El%20Pollo%20Loco/index.html',
      imgLeft: false
    },
    // {
    //   name: 'Simple CRM',
    //   foundation: 'Angular | Firebase',
    //   description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
    //   img: '../assets/imgs/placeholder_profile.png',
    //   github:'#',
    //   liveTest:'#',
    //   imgLeft: true
    // },
    {
      name: 'Ring of Fire',
      foundation: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'A drinking game where you and your friends can pull cards from a stable, each card provides a different drinking task.',
      img: '../assets/imgs/rof_img.png',
      github:'https://github.com/Steven-Munk/Ring-of-Fire',
      liveTest:'https://ring-of-fire-ea4f3.web.app/',
      imgLeft: true
    },
    {
      name: 'Pokédex',
      foundation: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI. A simple library that provides and catalogs pokemon information.',
      img: '../assets/imgs/pokedex_img.png',
      github:'https://github.com/Steven-Munk/PokeDex',
      liveTest:'https://steven-munk.de/Pokedex/index.html',
      imgLeft: false
    },
  ];
}
