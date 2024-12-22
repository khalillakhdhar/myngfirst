import { Component } from '@angular/core';

@Component({
  selector: 'app-parcours',
  standalone: false,
  
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.css'
})
export class ParcoursComponent {
  education=["Bac informatique","Mastére logiciel libre","Doctorat IOT et IA"];
  experience=[{date:2012,description:"développeur web chez novatech"},{date:2015,description:"enseignant universitaire à Enetcom"},{date:2019,description:"enseignant universitaire à ISET Gabés"}];


}
