import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { List } from 'src/app/list';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lists!: List[];
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params);

      this.taskService.getTasks().subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
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
}
