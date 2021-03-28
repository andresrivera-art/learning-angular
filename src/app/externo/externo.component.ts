import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [
    PeticionesService
  ]
})
export class ExternoComponent implements OnInit {

public user: any;
public userId: any;
public fecha:any;
public new_user:any;
public usuario_guardado;


  constructor(
    private _peticionesService: PeticionesService
  ) {

    this.userId = 2;

    this.new_user = {
      "name": "",
      "job": ""
  };


   }


  ngOnInit() {

  this.cargaUsuario();

  this.fecha = new Date(2019,5,17);

  
  }


  cargaUsuario(){


    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
    
        this.user = result.data;
        
    console.log(result);
    
      },
      error =>{
    
        console.log(<any> error)

        alert('Este usuario no existe');
        
      }
    )
  }

  onSubmit(form){

    this._peticionesService.addUser(this.new_user).subscribe(

      response=>{

      this.usuario_guardado = response;

        console.log(response);

        form.reset;

      },
      error=>{

        console.log(error);

      }
    )



  }



}
