import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosTemasComponent } from './modulos-temas.component';

describe('ModulosTemasComponent', () => {
  let component: ModulosTemasComponent;
  let fixture: ComponentFixture<ModulosTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulosTemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulosTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
