import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // As an attribute <div app-servers></div>
  // selector: '.app-servers', // As a class which can also then be styled as such <div class-"app-servers"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  /*styles: [`
    h1 {
      color: cadetblue;
    }
  `]*/
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Test Server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  /*onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }*/
  onUpdateServerName(event: Event) {
    // In the DOM <input> has an event target attribute
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
