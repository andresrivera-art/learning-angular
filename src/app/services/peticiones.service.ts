import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class PeticionesService{

public url:string;

    constructor(
        public _http: HttpClient
    ){

this.url ="https://reqres.in/api/users/";


    }


    getUser(userId):Observable<any>{

        return this._http.get(this.url+userId);

    }



addUser(user):Observable<any>{

    let params = JSON.stringify(user);

    let headers = new HttpHeaders().set('content-type','application/json');

    return this._http.post(this.url+params,{headers});
    


}


}