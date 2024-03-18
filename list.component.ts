import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  editStudent(arg0: any) {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }

  showData: any = [];

  constructor(public service: MyserviceService) {}

  ngOnInit() {
    this.service.getList().subscribe((data) => {
      console.log(data);
      this.showData = data;
    });
  }
  delete(item: any) {
    this.showData.splice(item - 1, 1);
    this.service.deleteData(item - 1).subscribe((data) => {
      console.log(data);
    });
  }
}
