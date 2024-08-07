import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProfessorComponent } from './registrar-professor.component';

describe('RegistrarProfessorComponent', () => {
  let component: RegistrarProfessorComponent;
  let fixture: ComponentFixture<RegistrarProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
