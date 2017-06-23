import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillyServerComponent } from './silly-server.component';

describe('SillyServerComponent', () => {
  let component: SillyServerComponent;
  let fixture: ComponentFixture<SillyServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillyServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillyServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
