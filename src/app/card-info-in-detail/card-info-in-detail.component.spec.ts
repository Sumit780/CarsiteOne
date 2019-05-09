import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoInDetailComponent } from './card-info-in-detail.component';

describe('CardInfoInDetailComponent', () => {
  let component: CardInfoInDetailComponent;
  let fixture: ComponentFixture<CardInfoInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
