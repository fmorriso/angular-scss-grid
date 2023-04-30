import { Component } from '@angular/core';
import {AngularVersionInformationService} from "./shared/angular-version-information.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-css-grid';
  angularVersion: string;
  constructor(ngVersion: AngularVersionInformationService){
    this.angularVersion = ngVersion.versionFull;
  }
}
