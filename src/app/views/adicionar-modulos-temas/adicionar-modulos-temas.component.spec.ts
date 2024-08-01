import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarModulosTemasComponent } from './adicionar-modulos-temas.component';

describe('AdicionarModulosTemasComponent', () => {
  let component: AdicionarModulosTemasComponent;
  let fixture: ComponentFixture<AdicionarModulosTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarModulosTemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarModulosTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
