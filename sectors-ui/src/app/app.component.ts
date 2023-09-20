import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sectors-ui';

  constructor(
    private router: Router
  ) {
  }

  get isAdminView() {
    return this.router.url.endsWith('admin');
  }
}
