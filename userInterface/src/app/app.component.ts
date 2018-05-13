import { Component } from '@angular/core';
import { HttpService } from './http.service';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = [];
  focusedTask = {};

  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
  }

  tasksFromService(){
  	let observable = this._httpService.getTasks();
  	observable.subscribe(data =>{
  		console.log("Got our data!",data)
  		this.tasks = data['tasks'];
  	})
  }

  focusTask(id){
  	for(let task of this.tasks){
  		if(task._id == id){
  			this.focusedTask = task;
  		}
  	}
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
