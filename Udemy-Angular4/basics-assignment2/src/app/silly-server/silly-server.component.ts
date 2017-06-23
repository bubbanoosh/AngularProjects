import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silly-server',
  templateUrl: './silly-server.component.html',
  styleUrls: ['./silly-server.component.css']
})
export class SillyServerComponent implements OnInit {
  userName = '';
  disableTheButton = true;

  constructor() { }

  ngOnInit() {
  }

  clearTheUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    this.disableTheButton = true;
  }

  onInputShouldDisableButton(event: Event) {
    this.disableTheButton = (this.userName !== '') ? false : true;
  }

}
