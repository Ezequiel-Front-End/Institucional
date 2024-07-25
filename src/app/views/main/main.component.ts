import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../../shared/profile/profile.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidenavComponent, RouterOutlet, ProfileComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
