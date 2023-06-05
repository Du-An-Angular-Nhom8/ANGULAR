import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(`http://localhost:8080/api/product`)
  }
  getOne(id: string | number) {
    return this.http.get(`http://localhost:8080/api/product/${id}`)
  }
  Remove(id:string|number) {
    return this.http.delete(`http://localhost:8080/api/product/${id}`)
  }
  AddPro(pro:any) {
    return this.http.post(`http://localhost:8080/api/product/add`,pro)
  }
  EditPro(pro: any) {
    return this.http.put(`http://localhost:8080/api/product/${pro._id}/edit`, pro)
  }

}
