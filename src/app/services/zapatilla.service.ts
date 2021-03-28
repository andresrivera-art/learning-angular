import {Injectable} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';

@Injectable()

export class ZapatillaService{
public zapatillas: Array<Zapatilla>;

constructor(){

    this.zapatillas = [
        new Zapatilla("Reebok Classic","Reebok","Blanco",60,true),
        new Zapatilla("Adidas Yeezy","Adidas","Blanco",180,true),
        new Zapatilla("Nike Runner","Nike","Azul",80,true)
    ];


}


getTexto(){

    return "Hola mundo desde un servcicio";
    
}


getZapatillas():Array<Zapatilla>{

return this.zapatillas;

}





}