import { Component, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

export interface AutoCompleteModel {
  value: any;
  display: string;
}

@Component({
  selector: 'app-modulos-temas',
  standalone: true,
  imports: [ChipsModule, FormsModule, TagInputModule],
  templateUrl: './modulos-temas.component.html',
  styleUrl: './modulos-temas.component.scss'
})
export class ModulosTemasComponent implements OnInit {

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


}
