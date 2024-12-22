import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondeComponent } from './seconde/seconde.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChoicesComponent } from './choices/choices.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ParcoursComponent } from './parcours/parcours.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/accueil', pathMatch: 'full'
  },

  {
    path:'accueil',component:HomeComponent
  },
  {
    path: 'seconde',component:SecondeComponent
  },
  {
path:"presentation",component:PresentationComponent
  },
  {
path:"parcours",component:ParcoursComponent
  },
  {
    path:'unfound',component:NotFoundComponent
  },
  {
    path:'choix/:id',component:ChoicesComponent
  },
  {
    path: '**',redirectTo: '/unfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
