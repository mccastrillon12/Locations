import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsHomeComponent } from './locations-home.component';

describe('LocationsHomeComponent', () => {
  let component: LocationsHomeComponent;
  let fixture: ComponentFixture<LocationsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsHomeComponent]
    });
    fixture = TestBed.createComponent(LocationsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
