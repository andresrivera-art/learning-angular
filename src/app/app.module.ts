import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { VideojuegoComponent } from './videojuego/videojuego.component';

import { AppComponent } from './app.component';

import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

import {routing, appRoutingProviders} from './app.routing';

import {HttpClientModule} from '@angular/common/http';


import { ExternoComponent } from './externo/externo.component';

import {CalculadoraPipe} from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
