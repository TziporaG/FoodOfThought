import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ArrangeMealComponent } from './arrange-meal/arrange-meal.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "arrange-meal",
    component: ArrangeMealComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArrangeMealComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
