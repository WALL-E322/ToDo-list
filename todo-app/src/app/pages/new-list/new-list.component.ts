import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';

import { List } from 'src/app/list';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  singleList;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.singleList = this.formBuilder.group({
      title: [''],
      isMain: false,
    });
  }

  ngOnInit(): void {}

  get title() {
    return this.singleList.get('title');
  }

  onSubmit() {
    //console.log(this.singleList.value);
    this.taskService
      .createList(this.singleList.value)
      .subscribe((list: List) => {
        this.router.navigate(['/lists', list._id]);
        //console.log(list._id);
      });
  }
}
