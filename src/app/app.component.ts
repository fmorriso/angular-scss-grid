import { Component } from '@angular/core';
import {AngularVersionInformationService} from "./shared/angular-version-information.service";
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NavigationComponent,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'angular-css-grid';
  angularVersion: string;
  constructor(ngVersion: AngularVersionInformationService){
    this.angularVersion = ngVersion.versionFull;
  }
}
