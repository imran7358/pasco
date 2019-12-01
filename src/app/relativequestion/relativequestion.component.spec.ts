import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativequestionComponent } from './relativequestion.component';

describe('RelativequestionComponent', () => {
  let component: RelativequestionComponent;
  let fixture: ComponentFixture<RelativequestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativequestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
