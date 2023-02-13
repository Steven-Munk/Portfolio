import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  skills = [
    { name: 'Angular', img: '../assets/imgs/angular_icon.png' },
    { name: 'Typescript', img: '../assets/imgs/typescript_icon.png' },
    { name: 'JavaScript', img: '../assets/imgs/javascript_icon.png' },
    { name: 'HTML', img: '../assets/imgs/html_icon.png' },
    { name: 'Firebase', img: '../assets/imgs/firebase_icon.png' },
    { name: 'GIT', img: '../assets/imgs/git_icon.png' },
    { name: 'CSS', img: '../assets/imgs/css_icon.png' },
    { name: 'REST-Api', img: '../assets/imgs/api_icon.png' },
    { name: 'Scrum', img: '../assets/imgs/scrum_icon.png' },
    { name: 'Material', img: '../assets/imgs/material_design_icon.png' }
  ];

}
