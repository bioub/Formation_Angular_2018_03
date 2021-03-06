import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule, // exports CommonModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
