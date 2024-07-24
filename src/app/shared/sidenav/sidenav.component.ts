import { Component } from '@angular/core';
import { data } from './data/nav-data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive],
  providers: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {
  navData = data;
  constructor() { }

  ngOnInit(): void {

  }

  Open() {
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    const closeBtn = document.getElementById("btn") as HTMLElement;

    sidebar.classList.toggle("open");
    sidebar.classList.contains("open") ? closeBtn.classList.replace("fa-bars", "fa-xmark") : closeBtn.classList.replace("fa-xmark", "fa-bars");

  }


}
