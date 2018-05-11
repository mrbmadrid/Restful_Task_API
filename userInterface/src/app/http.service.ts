import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  	this.getTasks();
  	this.getTask("5af21d943b1ffb4cbb53791f")
   }

   getTasks(){
   	let tempObservable = this._http.get('/tasks');
   	tempObservable.subscribe(data => console.log("Got your tasks!", data));
   }

   getTask(id : String){
   	let tempObservable = this._http.get('/tasks/'+id);
   	tempObservable.subscribe(data => console.log("Got your task!", data));
   }
}
