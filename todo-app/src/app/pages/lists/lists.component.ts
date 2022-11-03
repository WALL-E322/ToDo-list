import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/list';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists: List[] = [];
  tasks: Task[] = [];

  selectedListId = '';
  selectedTask: any;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.selectedListId = params['listId'];
    });
    this.getLists();
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  getLists(): void {
    this.taskService.getLists().subscribe((lists) => {
      this.lists = lists;
    });
  }

  deleteTask(taskId: any) {
    taskId = taskId.toString();
    this.taskService.deleteTask(taskId).subscribe((res: any) => {
      this.tasks = this.tasks.filter((val) => val._id !== taskId);
      //debugger;
    });
  }

  completeTask(taskId: any, task: Task) {
    taskId = taskId.toString();
    task.done = true;
    this.taskService.completeTask(taskId, task).subscribe((res: any) => {
      //debugger;
    });
  }

  moveTask(taskId: string) {
    this.taskService.getTask(taskId).subscribe((task) => {
      //debugger;
      task.list = '122714b85e796f261804d789';
      this.taskService
        .updateTask(taskId, task)
        .subscribe((res) => console.log('res', res));
    });
  }
}
