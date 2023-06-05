import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/Category';
import { Observable } from 'rxjs';

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
  RemoveCat(id:any) {
    return this.http.delete(`http://localhost:8080/api/category/${id}`)
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`http://localhost:8080/api/category/add`, category)
  }
}
