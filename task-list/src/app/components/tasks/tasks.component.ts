import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(
    private taskService: TaskService
  ) { }
  
  ngOnInit(): void { //cuando se monte el componente
    this.tasks = this.taskService.getTasks();
  }

}
