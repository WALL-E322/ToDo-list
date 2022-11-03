import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';
@Pipe({
  name: 'taskFilter',
})
export class TaskFilterPipe implements PipeTransform {
  transform(value: Task[], listId?: string): Task[] {
    if (!listId) {
      return value.filter(
        (listItem) => listItem.list === '122714b85e796f261804d789'
      );
    } else {
      return value.filter((listItem) => listItem.list === listId);
    }
  }
}
