import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface PeriodicElement {
  data_realizacao: any;
  aluno: any;
  prova: any;
  status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    data_realizacao: new Date("2023-10-26"),
    aluno: "Jasmine",
    prova: "Matemática",
    status: "Aprovado"
  },
  {
    data_realizacao: new Date("2023-10-28"),
    aluno: "João",
    prova: "Física",
    status: "Reprovado"
  },
  {
    data_realizacao: new Date("2023-10-30"),
    aluno: "Carla",
    prova: "Química",
    status: "Aprovado"
  },
  {
    data_realizacao: new Date("2023-10-30"),
    aluno: "Pedro",
    prova: "Química",
    status: "Aprovado"
  },
  {
    data_realizacao: new Date("2023-10-30"),
    aluno: "Mario",
    prova: "Química",
    status: "Aprovado"
  },
];

@Component({
  selector: 'app-simulados-realizados',
  standalone: true,
  imports: [NgFor, DialogModule, NgClass, CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatMenuModule, RouterLink, MatInputModule, LoadingComponent, NgIf, MatFormFieldModule],
  templateUrl: './simulados-realizados.component.html',
  styleUrl: './simulados-realizados.component.scss'
})


export class SimuladosRealizadosComponent {
  loading: boolean = false;
  placeholder: boolean = true;
  content: boolean = false;

  displayedColumns: string[] = ['Data de realização', 'Aluno', 'Prova', 'Status', 'setting'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator | any;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router, private paginatorIntl: MatPaginatorIntl) {
    // pagina atual (sempre começa em 0), qtd de itens por pagina, qtd de itens total
    this.paginatorIntl.getRangeLabel = (page, pageSize, length) => { // função que retorna o texto escrito pelo paginator
      if (length === 0) { // total de itens
        return `0 de ${length}`;
      }

      const from = page * pageSize + 1;
      const to = Math.min(from + pageSize - 1, length);
      return `${from} - ${to} de ${length}`;
    };

    this.paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    this.paginatorIntl.nextPageLabel = 'Próxima página';
    this.paginatorIntl.previousPageLabel = 'Página anterior';
    this.paginatorIntl.firstPageLabel = 'Primeira página';
    this.paginatorIntl.lastPageLabel = 'Última página';

  }

  isButtonDisabled: boolean = true;

  visible: boolean = false;

  showModal() {
    this.visible = true;
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(['/resultado-simulado'])
    }, 300)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}