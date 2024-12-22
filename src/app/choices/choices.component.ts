import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choices',
  standalone: false,
  
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent {
  id!:number;
constructor(private route:ActivatedRoute) { 
  this.id=this.route.snapshot.params['id'];
}

}
