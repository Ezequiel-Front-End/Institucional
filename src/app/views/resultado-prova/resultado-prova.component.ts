import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-resultado-prova',
  standalone: true,
  imports: [RouterOutlet, NgFor, LoadingComponent, NgIf, NgClass],
  templateUrl: './resultado-prova.component.html',
  styleUrl: './resultado-prova.component.scss'
})
export class ResultadoProvaComponent {

  constructor(private _router: Router) { }

  loading: boolean = false;
  dropdownVisible: boolean[] = [];;
  items = [
    { question: 'Questão 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta eget est sit amet maximus. Sed venenatis consectetur justo, efficitur vehicula neque feugiat eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in vehicula massa, non fermentum dui.', response: [{ alternative: 'A', description: '10' }, { alternative: 'B', description: '20' }, { alternative: 'C', description: '30' }, { alternative: 'D', description: '40' }], correctAnswer: 'A' },
    { question: 'Questão 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta eget est sit amet maximus. Sed venenatis consectetur justo, efficitur vehicula neque feugiat eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in vehicula massa, non fermentum dui.', response: [{ alternative: 'A', description: '10' }, { alternative: 'B', description: '20' }, { alternative: 'C', description: '30' }, { alternative: 'D', description: '40' }], correctAnswer: 'B' },
    { question: 'Questão 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta eget est sit amet maximus. Sed venenatis consectetur justo, efficitur vehicula neque feugiat eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in vehicula massa, non fermentum dui.', response: [{ alternative: 'A', description: '10' }, { alternative: 'B', description: '20' }, { alternative: 'C', description: '30' }, { alternative: 'D', description: '40' }], correctAnswer: 'C' }
  ];

  currentPage = 0;
  userAnswers = ['A', 'C', 'B'];

  getAnswerStatus(index: number): string {
    return this.userAnswers[index] === this.items[index].correctAnswer ? 'Correta' : 'Errada';
  }

  changePage(direction: number) {
    this.currentPage += direction;
    this.closeDropdown();
  }

  backPage() {
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(["provas-realizadas"]);

    }, 300)

  }

  showDropdown(index: number) {
    return this.getAnswerStatus(index) === "Errada";
  }
  toggleDropdown(index: number) {
    this.dropdownVisible[index] = !this.dropdownVisible[index];
  }

  getCorrectAnswer(index: number): string {
    return this.items[index].correctAnswer;
  }

  closeDropdown(): void {
    this.dropdownVisible.fill(false);
  }
}


