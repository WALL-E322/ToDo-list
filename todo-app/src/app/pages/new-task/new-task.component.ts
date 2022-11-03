import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';

import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  listId: string = '';
  singleTask;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _location: Location
  ) {
    this.singleTask = this.formBuilder.group({
      title: [''],
      date: [''],
      description: [''],
      done: false,
      list: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      //debugger;
      this.listId = params['listId'];
    });
  }
  get title() {
    return this.singleTask.get('title');
  }

  get date() {
    return this.singleTask.get('date');
  }

  get description() {
    return this.singleTask.get('description');
  }

  onSubmit() {
    //debugger;
    this.singleTask.value.list = this.listId;
    this.taskService
      .createTask(this.singleTask.value)
      .subscribe((task: Task) => {
        //console.log(task);
        this._location.back();
      });
  }
}
