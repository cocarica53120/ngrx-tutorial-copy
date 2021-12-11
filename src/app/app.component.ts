import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test: string;

  testMyOutput($event: any) {
    console.log('testMyOutput', $event);
    this.test = $event.message;
  }
}
