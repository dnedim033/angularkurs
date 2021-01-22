import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugaKompnentaComponent } from './druga-kompnenta.component';

describe('DrugaKompnentaComponent', () => {
  let component: DrugaKompnentaComponent;
  let fixture: ComponentFixture<DrugaKompnentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugaKompnentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugaKompnentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
