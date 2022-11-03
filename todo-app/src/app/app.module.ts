import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsComponent } from './pages/lists/lists.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFilterPipe } from './task-filter.pipe';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewListComponent,
    NewTaskComponent,
    ListsComponent,
    CompletedComponent,
    TaskFilterPipe,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
