import { Component, OnInit } from '@angular/core';
import {AngularVersionInformationService} from '../shared/angular-version-information.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent implements OnInit {
  angularVersion: string = '';
  constructor(private ngVersion: AngularVersionInformationService) { }

  ngOnInit() {
    this.angularVersion = this.ngVersion.versionFull;
  }

}
