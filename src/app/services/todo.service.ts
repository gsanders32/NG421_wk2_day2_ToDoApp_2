import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoId: number;
  todoList: Array<ITodo> = [
    { id: 1, title: 'Install Angular CLI', description: '' }
  ];

  constructor(private modalService: ModalService) { }

  getTodos() {
    return this.todoList;
  }

  addTodo(todoTitle: string): void {
    this.todoList.push({
      id: this.todoId,
      title: todoTitle,
      description: ''
    });

    // add 1 to id
    this.todoId++;
  }

  async deleteTodo(todo: any) {
    const result = await this.modalService.show();
    if (result === 'yes') {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  }
}
