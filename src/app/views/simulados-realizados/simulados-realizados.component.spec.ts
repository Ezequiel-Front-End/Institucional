import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladosRealizadosComponent } from './simulados-realizados.component';

describe('SimuladosRealizadosComponent', () => {
  let component: SimuladosRealizadosComponent;
  let fixture: ComponentFixture<SimuladosRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimuladosRealizadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimuladosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
