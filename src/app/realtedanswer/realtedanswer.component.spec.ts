import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtedanswerComponent } from './realtedanswer.component';

describe('RealtedanswerComponent', () => {
  let component: RealtedanswerComponent;
  let fixture: ComponentFixture<RealtedanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtedanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtedanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
