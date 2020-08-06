import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropJerseyComponent } from './crop-jersey.component';

describe('CropJerseyComponent', () => {
  let component: CropJerseyComponent;
  let fixture: ComponentFixture<CropJerseyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropJerseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropJerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
