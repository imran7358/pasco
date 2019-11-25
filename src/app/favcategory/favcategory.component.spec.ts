import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavcategoryComponent } from './favcategory.component';

describe('FavcategoryComponent', () => {
  let component: FavcategoryComponent;
  let fixture: ComponentFixture<FavcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
