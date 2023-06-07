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
  getNewproduct() {
    return this.http.get(`http://localhost:8080/api/product?_sort=createdAt&_order=desc&_limit=8&_page=1`)
  }
  getTrandy() {
    return this.http.get(`http://localhost:8080/api/product?_sort=createdAt&_order=asc&_limit=8&_page=1`)
  }
  getOne(id: string | number) {
    return this.http.get(`http://localhost:8080/api/product/${id}`)
  }
  Remove(id:string|number) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const accessToken = user ? user.accessToken : undefined;
    return this.http.delete(`http://localhost:8080/api/product/${id}`,{
      headers:{
            Authorization: `Bearer ${ accessToken }`
        }
    })
  }
  AddPro(pro:any) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const accessToken = user ? user.accessToken : undefined;
    return this.http.post(`http://localhost:8080/api/product/add`,pro,{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  }
  EditPro(pro: any) {
    const user = JSON.parse(localStorage.getItem('user')!)
    const accessToken = user ? user.accessToken : undefined;
    return this.http.put(`http://localhost:8080/api/product/${pro._id}/edit`, pro,{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  }

}
