import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	@Input() taskToShow;
	@Output() taskNeedsUpdate = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateTask(){
    this.taskNeedsUpdate.emit(); //we can pass in any data type
  }

}
