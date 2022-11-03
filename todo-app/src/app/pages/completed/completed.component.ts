import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: any) {
    taskId = taskId.toString();
    this.taskService.deleteTask(taskId).subscribe((res: any) => {
      this.tasks = this.tasks.filter((val) => val._id !== taskId);
      //debugger;
    });
  }
}
