import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  constructor() {}
  alert: boolean = false;
  feedResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rating: new FormControl(''),
    comment: new FormControl(''),
  });
  Review() {
    console.log(this.feedResto.value);
    this.alert = true;
    this.feedResto.reset();
  }

  close() {
    this.alert = false;
  }
}
