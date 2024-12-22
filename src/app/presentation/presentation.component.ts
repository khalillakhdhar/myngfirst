import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: false,
  
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  nom="Lakhdhar";
  prenom="Khalil";
  age=34;
  profession="enseignant universitaire";

}
