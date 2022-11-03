import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompletedComponent } from './pages/completed/completed.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { ListsComponent } from './pages/lists/lists.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lists/:listId/new-task', component: NewTaskComponent },
  { path: 'lists/:listId', component: ListsComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'new-list', component: NewListComponent },
  { path: 'completed', component: CompletedComponent },
  { path: ':listId/new-task', component: NewTaskComponent },
  { path: ':taskId/edit-task', component: EditTaskComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
