import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ProfileComponent } from './shared/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidenavComponent, LoadingComponent, ProfileComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'institucionalProject';
}
