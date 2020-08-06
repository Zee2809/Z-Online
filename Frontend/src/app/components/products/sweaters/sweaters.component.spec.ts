import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweatersComponent } from './sweaters.component';

describe('SweatersComponent', () => {
  let component: SweatersComponent;
  let fixture: ComponentFixture<SweatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
