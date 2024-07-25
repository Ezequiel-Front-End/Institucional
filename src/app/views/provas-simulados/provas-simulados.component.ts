import { NgClass, NgFor } from '@angular/common';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';
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
  imports: [NgFor, DialogModule, NgClass, RouterLink, CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatMenuModule, RouterLink, MatInputModule],
  templateUrl: './provas-simulados.component.html',
  styleUrl: './provas-simulados.component.scss'
})

export class ProvasSimuladosComponent implements AfterViewInit {

  displayedColumns: string[] = ['data_criacao', 'nome', 'tipo', 'quantidade', 'setting'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _router: Router) { }

  isButtonDisabled: boolean = true;

  data: any = [
    { "data_criacao": "26/02/2004", "nome": "Ezequiel", "tipo": "Prova", "quant": "74" },
    { "data_criacao": "22/11/2023", "nome": "Jasmine", "tipo": "Simulado", "quant": "44" },
    { "data_criacao": "10/12/2033", "nome": "Luís", "tipo": "Prova", "quant": "12" },
    { "data_criacao": "26/02/2004", "nome": "Ezequiel", "tipo": "Prova", "quant": "74" },
    { "data_criacao": "22/11/2023", "nome": "Jasmine", "tipo": "Simulado", "quant": "44" },
    { "data_criacao": "10/12/2033", "nome": "Luís", "tipo": "Prova", "quant": "12" },
    { "data_criacao": "26/02/2004", "nome": "Ezequiel", "tipo": "Prova", "quant": "74" },
    { "data_criacao": "22/11/2023", "nome": "Jasmine", "tipo": "Simulado", "quant": "44" },
    { "data_criacao": "10/12/2033", "nome": "Luís", "tipo": "Prova", "quant": "12" }
  ];

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
    this._router.navigate(["adicionar"]);
  }

  insertPreTeste() {
    this._router.navigate(["pre-teste"]);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
