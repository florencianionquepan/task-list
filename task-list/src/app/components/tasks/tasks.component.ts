import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../task'
import { AddTaskComponent } from '../add-task/add-task.component';

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
  
  ngOnInit(): void { //cuando se monte el componente, como una promesa
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    });
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(()=>{
      this.tasks = this.tasks.filter ( (t) => {
        
        return t.id !== task.id
      })
    })
  }
  toggleReminder(task: Task){
    task.reminder = !task.reminder
    //Una vez que ya le cambie el valor al reminder se la paso al servicio para que la actualice en la BD
    //la logica la manejo en el componente y luego le paso al servicio la tarea ya actualizada para que la guarde
    //el servicio solo habla con la BD. la logica se maneja en el componente
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    })
  }
}
