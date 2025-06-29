import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {Module02Component} from './module02/module02.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {GridUsingCSSComponent} from './grid-using-css/grid-using-css.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'gridcss', component: GridUsingCSSComponent, title:'CSS Grid' },
  { path: 'module02', component: Module02Component, title: 'Module02' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
const routeOptions: ExtraOptions = {
    enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
