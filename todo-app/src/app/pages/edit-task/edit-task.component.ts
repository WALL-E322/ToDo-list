import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';

import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  selectedTaskId: string = '';
  selectedTaskList: string = '';
  newTask;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _location: Location
  ) {
    this.newTask = this.formBuilder.group({
      title: [''],
      date: [''],
      description: [''],
      done: false,
      list: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.selectedTaskId = params['taskId'];
    });

    this.taskService.getTask(this.selectedTaskId).subscribe((res) => {
      // debugger;
      this.selectedTaskList = res.list;
      console.log('selected task: ', res);
    });
  }
  get title() {
    return this.newTask.get('title');
  }

  get date() {
    return this.newTask.get('date');
  }

  get description() {
    return this.newTask.get('description');
  }

  onSubmit() {
    //debugger;
    this.newTask.value.list = this.selectedTaskList;
    this.taskService
      .updateTask(this.selectedTaskId, this.newTask.value)
      .subscribe(() => {
        this._location.back();
      });
  }
}
