import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']/*,
  encapsulation: ViewEncapsulation.None*/
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked, OnDestroy {
  // Expose property with @Input()
  @Input() srvElement: {type: string, name: string, content: string};
  @Input() theName: string;
  @ViewChild('heading') header: ElementRef; // <div> is an ElementRef and can have the property 'textContent'
  @ContentChild('contentParagraph') para: ElementRef; // Part of the 'Content' of the view


  constructor() {
    console.log('constructor was called.');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges was called with SimpleChanges:');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngOnInit() {
    console.log('ngOnInit called.');
    console.log('ngOnInit TextContent: ' + this.header.nativeElement.textContent);
    console.log('ngOnInit TextContent of paragraph: ' + this.para.nativeElement.textContent);
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called.');
    console.log('ngAfterContentInit TextContent: ' + this.header.nativeElement.textContent);
    console.log('ngAfterContentInit TextContent of paragraph: ' + this.para.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called.');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called.');
    console.log('ngAfterViewInit TextContent of div is: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called.');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called.');
  }
}
