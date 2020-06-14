import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  async show(): Promise<any> {
    const modal = this.modalService.open(ModalComponent);
    const modalComponent: ModalComponent = modal.componentInstance;
    modalComponent.modalInstance = modal;

    return await modal.result;
  }
}
