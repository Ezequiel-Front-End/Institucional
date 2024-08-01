import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { NgIf } from '@angular/common';
import { ProfileComponent } from '../../shared/profile/profile.component';

@Component({
  selector: 'app-historico-aluno',
  standalone: true,
  imports: [LoadingComponent, NgIf, ProfileComponent],
  templateUrl: './historico-aluno.component.html',
  styleUrl: './historico-aluno.component.scss'
})
export class HistoricoAlunoComponent implements OnInit {

  loading: boolean = false;
  placeholder: boolean = true;
  content: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.placeholder = false;
      this.content = true;

    }, 3000)
  }

  backPage() {
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(["alunos"]);

    }, 1000)


  }

}
