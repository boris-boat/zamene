import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddslistComponent } from './addslist.component';

describe('AddslistComponent', () => {
  let component: AddslistComponent;
  let fixture: ComponentFixture<AddslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
