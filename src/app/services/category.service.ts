import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getOneCat(id:any){
    return this.http.get(`http://localhost:8080/api/category/${id}`)
  }
  getAllCat() {
    return this.http.get(`http://localhost:8080/api/category`)
  }
}
