import { Component, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import * as XLSX from "xlsx";
import { JsonPipe } from '@angular/common';

export interface AutoCompleteModel {
  value: any;
  display: string;
}

@Component({
  selector: 'app-modulos-temas',
  standalone: true,
  imports: [ChipsModule, FormsModule, TagInputModule, JsonPipe],
  templateUrl: './modulos-temas.component.html',
  styleUrl: './modulos-temas.component.scss'
})
export class ModulosTemasComponent implements OnInit {

  ExcelData: any;

  constructor() {

  }

  ngOnInit(): void {
    TagInputModule.withDefaults({
      tagInput: {
        placeholder: 'Adicione um novo tema'
      }
    })
  }

  values: string[] | any;

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

}
