import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProvaSimuladoComponent } from './adicionar-prova-simulado.component';

describe('AdicionarProvaSimuladoComponent', () => {
  let component: AdicionarProvaSimuladoComponent;
  let fixture: ComponentFixture<AdicionarProvaSimuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarProvaSimuladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarProvaSimuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
