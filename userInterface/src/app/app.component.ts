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
  newTask : any;
  message : any;

  constructor(private _httpService: HttpService){
  	this.newTask = {title:"", description:""}
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

  createTask(){
  	console.log(this.newTask)
  	let observable = this._httpService.createTask(this.newTask);
  	observable.subscribe(data =>{
  		console.log(data)
  		this.tasksFromService();
  		this.newTask = {title:"", description:""}
  	})
  }

  deleteTask(id){
  	let observable = this._httpService.deleteTask(id);
  	observable.subscribe(data =>{
  		console.log(data)
  		this.tasksFromService();
  	})
  }

  updateTask(id){
  	let observable = this._httpService.updateTask(id, this.focusedTask);
  	observable.subscribe(data =>{
  		console.log(data);
  		this.tasksFromService();
  	})
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
