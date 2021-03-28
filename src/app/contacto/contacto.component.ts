

import { Component, OnInit } from '@angular/core';

import {ContactoUsuario} from '../models/contactousuario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario;

  constructor() {

    this.usuario = new ContactoUsuario('Andres', 'Rivera', 'email', 'msg');


   }

  ngOnInit(): void {
  }


  onSubmit(form){

form.reset();



  }



}
