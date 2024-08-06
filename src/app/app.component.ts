import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular14-jasmin-unit-testing';
  btnText = 'Subscribe';
  isSubscribed = false;
  marks = [97, 68, 83, 29, 75];
  condition = false;

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = 'Subscribed';
    }, 2_000);
  }
}
