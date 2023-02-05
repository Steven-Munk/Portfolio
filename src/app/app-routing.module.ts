import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'datenschutz', component: DatenschutzComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
