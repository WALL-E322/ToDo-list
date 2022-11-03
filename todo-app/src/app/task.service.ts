import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

import { Observable, of } from 'rxjs';
import { Task } from './task';
//import { ObjectIdExtended } from 'bson';
import { List } from './list';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}

  createList(list: Object): Observable<any> {
    return this.webReqService.post('lists', list);
  }

  createTask(task: Object): Observable<any> {
    return this.webReqService.post('tasks', task);
  }

  getLists(): Observable<any> {
    return this.webReqService.get('lists');
  }

  getTasks(): Observable<any> {
    return this.webReqService.get('tasks');
  }

  deleteTask(taskId: string) {
    return this.webReqService.delete(`${taskId}`);
  }

  completeTask(taskId: string, task: Task) {
    return this.webReqService.put(`tasks/${taskId}`, task);
  }

  getTask(taskId: string): Observable<any> {
    return this.webReqService.get(`tasks/${taskId}`);
  }

  updateTask(taskId: string, newTask: Object) {
    return this.webReqService.put(`tasks/${taskId}`, newTask);
  }

  updateList(listId: string, newList: Object) {
    return this.webReqService.put(`lists/${listId}`, newList);
  }
}
