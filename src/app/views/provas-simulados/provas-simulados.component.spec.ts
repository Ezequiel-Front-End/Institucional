import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvasSimuladosComponent } from './provas-simulados.component';

describe('ProvasSimuladosComponent', () => {
  let component: ProvasSimuladosComponent;
  let fixture: ComponentFixture<ProvasSimuladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvasSimuladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvasSimuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
