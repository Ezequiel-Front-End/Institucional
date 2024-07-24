import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ToastModule],
  providers: [MessageService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.modeExit();

  }

  exit() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuário deslogado!' });
  }

  modeExit() {
    
    let listItem = document.getElementById("dropdown-exit") as any;
    let icon = document.getElementById("icone") as HTMLElement;

    listItem.addEventListener('mouseover', () => {
      icon.classList.remove("fa-gear");
      icon.classList.add("fa-person-running");
    });

    listItem.addEventListener('mouseout', () => {
      icon.classList.remove('fa-person-running');
      icon.classList.add('fa-arrow-right-from-bracket');
    });


  }

}
