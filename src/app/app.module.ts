import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
import { Module02Component } from './module02/module02.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GridUsingCSSComponent } from './grid-using-css/grid-using-css.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationComponent,
    HomeComponent,
    GridUsingCSSComponent,
    AboutComponent,
    Module02Component,
    PageNotFoundComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
