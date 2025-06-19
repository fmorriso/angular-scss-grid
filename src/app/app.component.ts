import {Component} from '@angular/core';
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
  constructor() {}
}
