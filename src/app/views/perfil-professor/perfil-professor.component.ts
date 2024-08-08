import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { LoadingComponent } from "../../shared/loading/loading.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-perfil-professor',
  standalone: true,
  imports: [LoadingComponent, NgIf],
  templateUrl: './perfil-professor.component.html',
  styleUrl: './perfil-professor.component.scss'
})
export class PerfilProfessorComponent {
  photoBase64: string | null = null;
  visible: boolean = true;
  loading: boolean = false;

  constructor(private _router: Router){}

  editPhotoProfile(): void {
    const img = document.querySelector("#photo") as HTMLImageElement | null;
    const file = document.querySelector("#file") as HTMLInputElement | null;

    file?.addEventListener("change", function (this: HTMLInputElement) {
      const chosedfile = this.files?.[0];
      if (chosedfile) {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
          if (reader.result && typeof reader.result === 'string') {
            img?.setAttribute('src', reader.result);
          }
        });
        reader.readAsDataURL(chosedfile)
      }
    });
  }

  removePhotoProfile(): void {
    const photo = document.getElementById("photo") as HTMLImageElement;
    this.photoBase64 = environment.placeholder;
    if (photo) {
      photo.src = "/assets/images/photo-profile.png";
    }
  }

  convertToBase64(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.photoBase64 = reader.result as string;
      };

      reader.onerror = (error) => {
        console.error('Error: ', error);
      };

      reader.readAsDataURL(file);
    }
  }

  backPage() {
    this.visible = false;
    this.loading = true;

    setTimeout(() => {
      this._router.navigate(['professores'])
    }, 1000);

  }
}
