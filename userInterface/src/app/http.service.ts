import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }

   getTasks(){
   	return this._http.get('/tasks');
   }

   getTask(id : String){
   	return this._http.get('/tasks/'+id);
   }

   createTask(newTask){
     return this._http.post('/tasks', newTask);
   }

   deleteTask(id){
     return this._http.delete('/tasks/'+id);
   }

   updateTask(id, task){
     return this._http.put('/tasks/'+id, task);
   }

   
}
