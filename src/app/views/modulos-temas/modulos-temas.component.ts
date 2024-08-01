import { Component, OnInit, ViewChild } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import * as XLSX from "xlsx";
import { CommonModule, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Router, RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatPaginatorIntlPt } from '../../config/config-table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';


export interface AutoCompleteModel {
  value: any;
  display: string;
}

export interface PeriodicElement {
  modulo: any;
  tema: any;
  numberQuestion: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { modulo: "Português", tema: "Figuras de Linguaguem", numberQuestion: 22 },
  { modulo: "Geografia", tema: "Mapa mundial", numberQuestion: 99 },
  { modulo: "Física", tema: "Leis de Newton", numberQuestion: 9090 },
  { modulo: "Português", tema: "Figuras de Linguaguem", numberQuestion: 22 },
  { modulo: "Geografia", tema: "Mapa mundial", numberQuestion: 99 },
  { modulo: "Física", tema: "Leis de Newton", numberQuestion: 9090 },
  { modulo: "Português", tema: "Figuras de Linguaguem", numberQuestion: 22 },
  { modulo: "Geografia", tema: "Mapa mundial", numberQuestion: 99 },
  { modulo: "Física", tema: "Leis de Newton", numberQuestion: 9090 },
];

@Component({
  selector: 'app-modulos-temas',
  standalone: true,
  imports: [TooltipModule, InputTextModule, ChipsModule, FormsModule, TagInputModule, JsonPipe, NgFor, DialogModule, NgClass, RouterLink, CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatMenuModule, RouterLink, MatInputModule, LoadingComponent, NgIf],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlPt }],
  templateUrl: './modulos-temas.component.html',
  styleUrl: './modulos-temas.component.scss'
})


export class ModulosTemasComponent implements OnInit {

  displayedColumns: string[] = ['Modúlo', 'Tema', 'Número de Questões', 'setting'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  visible: boolean = false;
  ExcelData: any;

  constructor(private _router: Router) {

  }

  ngOnInit(): void {
    TagInputModule.withDefaults({
      tagInput: {
        placeholder: 'Adicione um novo tema'
      }
    })
  }

  values: string[] | any;

  add(){
    this._router.navigate(["adicionar-modulos-temas"]);

  }

  ReadExcel($event: any) {

    let file = $event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onloadend = (e) => {
      let workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;

     this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);

      console.log(this.ExcelData);

    }

  }

  showModalDelete() {
    this.visible = true;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
