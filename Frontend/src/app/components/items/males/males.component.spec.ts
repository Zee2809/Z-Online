import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalesComponent } from './males.component';

describe('MalesComponent', () => {
  let component: MalesComponent;
  let fixture: ComponentFixture<MalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
