import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoSimuladoComponent } from './resultado-simulado.component';

describe('ResultadoSimuladoComponent', () => {
  let component: ResultadoSimuladoComponent;
  let fixture: ComponentFixture<ResultadoSimuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoSimuladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadoSimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
