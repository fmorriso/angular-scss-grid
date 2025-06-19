import { Component, OnInit } from '@angular/core';
import {AngularVersionInformationService} from '../shared/angular-version-information.service';
import {MaterialVersionInformationService} from "../shared/material-version-information.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent implements OnInit {
  angularVersion: string = '';
  materialVersion: string = '';

  constructor(private ngVersion: AngularVersionInformationService, private matVersionService: MaterialVersionInformationService) { }

  ngOnInit() {
    this.angularVersion = this.ngVersion.versionFull;
    this.materialVersion = this.matVersionService.versionFull;
  }

}
