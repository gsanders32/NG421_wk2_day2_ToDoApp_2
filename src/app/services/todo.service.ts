import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  title: string;
  todoTitle: string;
  todoId: number;
  todoList: Array<ITodo> = [
    { id: 1, title: 'Install Angular CLI', description: '' }
  ];

  constructor(private ngbModal: NgbModal) { }

  getTodos() {
    return this.todoList;
  }

  addTodo(todoTitle: string): void {
    this.todoList.push({
      id: this.todoId,
      title: todoTitle,
      description: ''
    });

    // resets our todoTitle variable to an empty string and add 1 to id
    this.todoTitle = '';
    this.todoId++;
  }
  async deleteTodo(todo: any) {
    const modal = this.ngbModal.open(ModalComponent);
    const modalComponent: ModalComponent = modal.componentInstance;
    modalComponent.modalInstance = modal;

    const result = await modal.result;
    if (result === 'yes') {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }

  }

}
