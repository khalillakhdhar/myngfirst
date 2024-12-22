import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondeComponent } from './seconde/seconde.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChoicesComponent } from './choices/choices.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondeComponent,
    NotFoundComponent,
    ChoicesComponent,
    PresentationComponent,
    ParcoursComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
