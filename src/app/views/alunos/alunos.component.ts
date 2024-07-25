import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogModule } from 'primeng/dialog';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

export interface PeriodicElement {
  codigo: any;
  aluno: any;
  cursos: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { codigo: 1, aluno: "Ezequiel", cursos: 'Matematica' },
  { codigo: 2, aluno: "Jasmine", cursos: 'Ed. Fisica' },
  { codigo: 3, aluno: "Luís", cursos: 'Portugues' },
  { codigo: 4, aluno: "Ezequiel", cursos: 'Matematica' },
  { codigo: 5, aluno: "Jasmine", cursos: 'Ed. Fisica' },
  { codigo: 6, aluno: "Luís", cursos: 'Portugues' },
  { codigo: 7, aluno: "Ezequiel", cursos: 'Matematica' },
  { codigo: 8, aluno: "Jasmine", cursos: 'Ed. Fisica' },
  { codigo: 9, aluno: "Luís", cursos: 'Portugues' }
];

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [NgFor, DialogModule, NgClass, CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatMenuModule, RouterLink, MatInputModule, LoadingComponent, NgIf],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})

export class AlunosComponent {

  loading: boolean = false;
  placeholder: boolean = true;
  content: boolean = false;

  displayedColumns: string[] = ['Código', 'Aluno', 'Cursos', 'setting'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router) { }

  isButtonDisabled: boolean = true;

  visible: boolean = false;

  showModal() {
    this.visible = true;
    this.placeholder = true;

    setTimeout(() => {
      this.placeholder = false;
      this.content = true;

    }, 3000)


  }

  closeModal() {
    this.visible = false;
    this.content = false;

  }

  routerHistorioAluno() {
    this.visible = false;
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(["historico-aluno"])

    }, 1500);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
