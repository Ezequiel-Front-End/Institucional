import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';
import { LoadingComponent } from '../../shared/loading/loading.component';
export interface PeriodicElement {
  id: any;
  date_create: any;
  name: any;
  type: any;
  quant: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, date_create: "26/02/2004", name: '3 ano A', type: "Prova", quant: '20' },
  { id: 1, date_create: "26/02/2004", name: '3 ano B', type: "Simulado", quant: '240' },
  { id: 1, date_create: "26/02/2004", name: '3 ano B', type: "Simulado", quant: '240' },
  { id: 1, date_create: "26/02/2004", name: '3 ano B', type: "Simulado", quant: '240' },
  { id: 1, date_create: "26/02/2004", name: '3 ano B', type: "Simulado", quant: '240' },
  { id: 1, date_create: "26/02/2004", name: '3 ano B', type: "Simulado", quant: '240' },
  { id: 1, date_create: "26/02/2004", name: '3 ano B', type: "Simulado", quant: '240' },
  { id: 1, date_create: "26/02/2004", name: '3 ano B', type: "Simulado", quant: '240' },
];

@Component({
  selector: 'app-provas-simulados',
  standalone: true,
  imports: [NgFor, DialogModule, NgClass, RouterLink, CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatMenuModule, RouterLink, MatInputModule, LoadingComponent, NgIf],
  templateUrl: './provas-simulados.component.html',
  styleUrl: './provas-simulados.component.scss'
})

export class ProvasSimuladosComponent implements AfterViewInit {

  loading: boolean = false;
  placeholder: boolean = true;
  content: boolean = false;

  displayedColumns: string[] = ['data_criacao', 'nome', 'tipo', 'quantidade', 'setting'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router) { }

  isButtonDisabled: boolean = true;

  visible: boolean = false;

  showModalDelete() {
    this.visible = true;
  }

  closeModalDelete() {
    this.visible = false;
  }

  disabledInput($event: any) {
    let name = $event.target.value;

    if (name == "simulado") {
      return this.isButtonDisabled = false;
    }

    return this.isButtonDisabled = true;
  }

  add() {
    this._router.navigate(["registrar-professor"]);
  }

  insertPreTeste() {
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(["pre-teste"]);

    }, 1000)

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
