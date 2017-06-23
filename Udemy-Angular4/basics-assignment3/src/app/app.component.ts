import { Component } from '@angular/core';
import {timestamp} from 'rxjs/operator/timestamp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTheParagraph = false;
  timeStamps = [ new Date().toLocaleString() ];

  constructor() {
  }

  handleButtonClick(show) {
    this.timeStamps.push(new Date().toLocaleString());
    this.showTheParagraph = show ? false : true;

  }

  styleTheTimestamps(len) {
    return (len > 4) ? 'white' : 'grey';
  }
}
