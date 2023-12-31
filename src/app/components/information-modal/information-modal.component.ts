import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LocationModel } from '../notice/model/location.model';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.sass']
})
export class InformationModalComponent implements OnInit {
  location: LocationModel
  constructor(@Inject(MAT_DIALOG_DATA) public data:LocationModel){

  }
  ngOnInit() {
    this.location = this.data
  }
}
