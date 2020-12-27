import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zapatillas2Component } from './zapatillas2.component';

describe('Zapatillas2Component', () => {
  let component: Zapatillas2Component;
  let fixture: ComponentFixture<Zapatillas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zapatillas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zapatillas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
