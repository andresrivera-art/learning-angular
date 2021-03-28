import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';



@Component({

selector: 'videojuego',
//un template en linea puede hacerse con template = `codigo html`
templateUrl: './videojuego.component.html'


})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string;

constructor(){

    this.titulo = "Componente de videojuegos";
    this.listado = "Listado de videojuegos populares";
    console.log("Se ha cargado el componente videojuego");


}

public mostrar_videojuegos:boolean = true;

ocultarvideojuegos(value:boolean){
  
  this.mostrar_videojuegos = value;
  
}


ngOnInit(){

    console.log("ONINIT ejecutado");

}

ngDoCheck(){

    console.log("Do check ejecutado");


}

ngOnDestroy(){

    console.log("ON Destroy ejecutado");
    
}

cambiar_titulo(){
    this.titulo = "nuevo titulo del componente";

}



}