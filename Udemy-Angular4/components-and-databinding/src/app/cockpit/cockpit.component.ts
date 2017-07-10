import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Events to bind/listen for use 'EventEmitter'
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('severContentInput') serverContentInput: ElementRef; // ViewChild on local reference

  newServerName = ''; // bound with [(ngModel)]="newServerName"
  newServerContent = ''; // bound with [(ngModel)]="newServerContent"
  constructor() { }

  ngOnInit() {
  }
  // emit() the custom event
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      /*serverName: nameInput.value, // From a local reference in the template with: <input...  #serverNameInput>*/
      serverName: this.serverNameInput.nativeElement.value, // From a local reference in the template with: <input...  #serverNameInput>
      // serverContent: this.newServerContent // From 2 way binding in the template with <input...  [(ngModel)]="newServerContent">
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  // emit() the custom event
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }
}
