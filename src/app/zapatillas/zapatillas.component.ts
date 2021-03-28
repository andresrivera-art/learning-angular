import { Component, OnInit } from '@angular/core';


import { Zapatilla } from '../models/zapatilla';

import {ZapatillaService} from '../services/zapatilla.service';


@Component({

selector: 'zapatillas',
templateUrl: './zapatillas.component.html',
providers: [
ZapatillaService
]
})


export class ZapatillasComponent implements OnInit{

    public titulo: string = "Componente de zapatillas";
    
public zapatillas: Array<Zapatilla>;
public marcas: string[];
public color:string;
public mi_marca:string;


    constructor(
        private _zapatillaservice:ZapatillaService
    ){

        this.mi_marca = "AR";

        this.color = 'red';
        this.marcas = new Array();

    
    }

    ngOnInit(){

      this.zapatillas =  this._zapatillaservice.getZapatillas();

console.log(this.zapatillas);

this.getmarcas();

    }

    getmarcas(){

        this.zapatillas.forEach((elemento,indice)=>{

            if(this.marcas.indexOf(elemento.marca) < 0 ){

                this.marcas.push(elemento.marca);

            }
          

        });

    }


    getMarca(){

        alert(this.mi_marca);


    }

    addMarca(){

        this.marcas.push(this.mi_marca);


    }

borrarMarca(indice){

   this.marcas.splice(indice,1);


}

onBlur(){

    console.log("Has salido del input");

}

mostrarPalabra(){

    alert(this.mi_marca);
    

}
    
}