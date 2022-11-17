import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnaddsComponent } from './ownadds.component';

describe('OwnaddsComponent', () => {
  let component: OwnaddsComponent;
  let fixture: ComponentFixture<OwnaddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnaddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnaddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
