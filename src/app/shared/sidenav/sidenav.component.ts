import { Component } from '@angular/core';
import { data } from './data/nav-data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive, NgIf],
  providers: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {
  navData = data;
  showDropdown = false; // Flag to control dropdown visibility

  constructor() { }

  ngOnInit(): void {

  }

  Open() {
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    const closeBtn = document.getElementById("btn") as HTMLElement;

    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("fa-bars", "fa-xmark");
    } else {
      closeBtn.classList.replace("fa-xmark", "fa-bars");

      this.showDropdown = false;
    }
  }

  showListDropdown() {
    this.showDropdown = !this.showDropdown;
    const iconArrow = document.getElementById("icon-arrow") as HTMLElement;
    iconArrow.style.transform = this.showDropdown ? 'rotate(-180deg)' : 'rotate(0)';
  }


}
