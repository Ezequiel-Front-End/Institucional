import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';



@Component({
  selector: 'app-adicionar-prova-simulado',
  standalone: true,
  imports: [DialogModule, NgFor, FormsModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './adicionar-prova-simulado.component.html',
  styleUrl: './adicionar-prova-simulado.component.scss'
})
export class AdicionarProvaSimuladoComponent implements OnInit {

  // time
  hours: number[] = [];
  minutes: number[] = [];
  seconds: number[] = [];
  selectedHour: any = 0;
  selectedMinute: any = 0;
  selectedSecond: any = 0;

  // card
  cards: string[] = [];
  cardsPerPage = 3;
  currentPage = 1;
  totalPages = 1;
  currentCards: string[] = [];

  ngOnInit(): void {

    for (let i = 0; i <= 24; i++) {
      this.hours.push(i);
    }

    for (let i = 0; i <= 60; i++) {
      this.minutes.push(i);
      this.seconds.push(i);
    }

    // Inicializa os cards (pode ser substituído por dados reais)
    this.cards = Array.from({ length: 30 }, (_, i) => `Card ${i + 1}`);
    this.totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
    this.updateCurrentCards();

  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  getTime() {
    alert(`Hora selecionada: ${this.selectedHour}:${this.selectedMinute}:${this.selectedSecond}`);
  }

  updateCurrentCards(): void {
    const start = (this.currentPage - 1) * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.currentCards = this.cards.slice(start, end);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentCards();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCurrentCards();
    }
  }

}
