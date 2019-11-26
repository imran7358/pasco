import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerdetailsComponent } from './answerdetails.component';

describe('AnswerdetailsComponent', () => {
  let component: AnswerdetailsComponent;
  let fixture: ComponentFixture<AnswerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
