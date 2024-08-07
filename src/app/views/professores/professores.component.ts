import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogModule } from 'primeng/dialog';

export interface PeriodicElement {
  data_criacao: any,
  codigo: number,
  nome: string,
  data_nascimento: string,
  email: string,
  telefone: string
  especialidade: string
  formacao_academica: string
  turma: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { data_criacao: '07/08/2024', codigo: 1, nome: 'Joaquina', data_nascimento: '14/02/2002', email: 'joaquina@gmail.com', telefone: '(11) 95869-7411', especialidade: 'Matemática', formacao_academica: 'Ensino Superior', turma: '1 ano A' },
  { data_criacao: '07/08/2024', codigo: 2, nome: 'Patricia', data_nascimento: '14/02/2002', email: 'joaquina@gmail.com', telefone: '(11) 95869-7411', especialidade: 'Matemática', formacao_academica: 'Ensino Superior', turma: '1 ano A' },
  { data_criacao: '07/08/2024', codigo: 3, nome: 'Carla', data_nascimento: '14/02/2002', email: 'joaquina@gmail.com', telefone: '(11) 95869-7411', especialidade: 'Matemática', formacao_academica: 'Ensino Superior', turma: '1 ano A' },
  { data_criacao: '07/08/2024', codigo: 4, nome: 'Isabela', data_nascimento: '14/02/2002', email: 'joaquina@gmail.com', telefone: '(11) 95869-7411', especialidade: 'Matemática', formacao_academica: 'Ensino Superior', turma: '1 ano A' },

];

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [NgFor, DialogModule, NgClass, RouterLink, CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatMenuModule, RouterLink, MatInputModule, LoadingComponent, NgIf],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.scss'
})

export class ProfessoresComponent {
  loading: boolean = false;
  content: boolean = false;
  isButtonDisabled: boolean = true;
  visible: boolean = false;
  visibleDelete: boolean = false;

  displayedColumns: string[] = ['codigo', 'nome', 'especialidade', 'turma', 'setting'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showModalView() {
    this.visible = true;

    setTimeout(() => {
      let cardPlaceholder = document.querySelector('.card-placeholder') as HTMLElement;
      cardPlaceholder.style.display = 'none'
      this.content = true;
    }, 1000)

  }


  closeModalView() {
    this.visible = false;
    this.content = false;
  }

  showModalDelete() {
    this.visibleDelete = true;
  }

  closeModalDelete() {
    this.visibleDelete = false;
  }

  // desabilita o botão de excluir
  disabledButton($event: any) {
    let name = $event.target.value;

    if (name == "nomeDoPofessor") {
      return this.isButtonDisabled = false;
    }

    return this.isButtonDisabled = true;
  }

  registerTeacher() {
    this._router.navigate(["registrar-professor"]);
  }

  showTeacherProfile() {
    this.visible = false;
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(['perfil-professor'])
    }, 1000);

  }
}
