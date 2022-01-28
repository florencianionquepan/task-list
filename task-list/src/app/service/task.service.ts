import { Injectable } from '@angular/core';

import {Task} from '../task'
import {TASKS} from '../mock-tasks'


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Task[] {
    return TASKS
  }
}
