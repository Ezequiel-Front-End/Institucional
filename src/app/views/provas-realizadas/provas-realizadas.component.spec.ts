import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvasRealizadasComponent } from './provas-realizadas.component';

describe('ProvasRealizadasComponent', () => {
  let component: ProvasRealizadasComponent;
  let fixture: ComponentFixture<ProvasRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvasRealizadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
