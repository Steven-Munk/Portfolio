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
    {
      name: 'My Personal Portfolio',
      foundation: 'Angular | TypeScript | HTML | SCSS ',
      description: 'This is my very own website to showcase some of my projects, you are actually using this web application right now!',
      img: '../assets/imgs/portfolio_portfolio_img.png',
      github:'https://github.com/Steven-Munk/Portfolio',
      liveTest:'https://steven-munk.de/',
      imgLeft: true
    }
  ];
}
