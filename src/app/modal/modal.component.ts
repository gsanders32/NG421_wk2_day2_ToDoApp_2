import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalInstance: NgbModalRef;
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.modalInstance.close('no');
  }

  yes() {
    this.modalInstance.close('yes');
  }

}
