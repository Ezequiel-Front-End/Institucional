import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-teste',
  standalone: true,
  imports: [RouterOutlet, NgFor, LoadingComponent, NgIf],
  templateUrl: './pre-teste.component.html',
  styleUrl: './pre-teste.component.scss'
})
export class PreTesteComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  loading: boolean = false;

  items = [
    { question: 'Questão 1', text: 'Gustavo está fazendo um tratamento de saúde e deve tomar 3 tipos diferentes de remédios. O primeiro remédio deve ser tomado de 4 em 4 horas, o segundo de 6 em 6 horas e o terceiro de 8 em 8 horas. Se Gustavo tomar os três remédios juntos, em quantas horas irá tomar os três juntos novamente?', response: [ { alternative: 'A', description: '10' }, { alternative: 'B', description: '20' }, { alternative: 'C', description: '30' }, { alternative: 'D', description: '40' } ] },
    { question: 'Questão 2', text: 'Gustavo está fazendo um tratamento de saúde e deve tomar 3 tipos diferentes de remédios. O primeiro remédio deve ser tomado de 4 em 4 horas, o segundo de 6 em 6 horas e o terceiro de 8 em 8 horas. Se Gustavo tomar os três remédios juntos, em quantas horas irá tomar os três juntos novamente?', response: [ { alternative: 'A', description: '10' }, { alternative: 'B', description: '20' }, { alternative: 'C', description: '30' }, { alternative: 'D', description: '40' } ] },
    { question: 'Questão 3', text: 'Gustavo está fazendo um tratamento de saúde e deve tomar 3 tipos diferentes de remédios. O primeiro remédio deve ser tomado de 4 em 4 horas, o segundo de 6 em 6 horas e o terceiro de 8 em 8 horas. Se Gustavo tomar os três remédios juntos, em quantas horas irá tomar os três juntos novamente?', response: [ { alternative: 'A', description: '10' }, { alternative: 'B', description: '20' }, { alternative: 'C', description: '30' }, { alternative: 'D', description: '40' } ] }
  ];

  currentPage = 0;

  changePage(direction: number) {
    this.currentPage += direction;
  }

  backPage() {
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(["provas-simulados"]);

    }, 1000)

  }


}
