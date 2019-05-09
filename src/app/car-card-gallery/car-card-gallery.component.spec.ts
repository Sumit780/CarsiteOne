import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardGalleryComponent } from './car-card-gallery.component';

describe('CarCardGalleryComponent', () => {
  let component: CarCardGalleryComponent;
  let fixture: ComponentFixture<CarCardGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCardGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
