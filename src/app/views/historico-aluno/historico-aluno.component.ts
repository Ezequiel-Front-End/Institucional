import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-historico-aluno',
  standalone: true,
  imports: [LoadingComponent, NgIf],
  templateUrl: './historico-aluno.component.html',
  styleUrl: './historico-aluno.component.scss'
})
export class HistoricoAlunoComponent {

  loading: boolean = false;

  constructor(private _router: Router) { }

  backPage() {
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(["alunos"]);

    }, 1000)


  }
  
}
