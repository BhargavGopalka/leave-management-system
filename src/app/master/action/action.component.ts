import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  holidaysPerMonth = 3;
  holidaysRemainMonth = 2;

  requestForm = false;
  multipleDays = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickLeaverRequest() {
    this.requestForm = true;
  }

  onChangeMultipleDays(e) {
    if (e.target.checked === true) {
      this.multipleDays = true;
    } else {
      this.multipleDays = false;
    }
  }

  onClickCancel() {
    this.requestForm = false;
  }

}
