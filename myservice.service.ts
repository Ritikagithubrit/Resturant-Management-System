import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  url = 'http://localhost:3000/Resturant';

  constructor(private http: HttpClient) {}
  getList() {
    return this.http.get(this.url);
  }
  deleteData(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
