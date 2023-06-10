import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];
  wardId: any
  districtId: any
  provinceId: any
  result: any
  checkout:any={
    name:'',
    email:'',
    province:'',
    district:'',
    ward:'',
    phone:'',
    numberHouse:'',
    cart:[]
  }
  constructor(private provinceApiService: MapService) { 
    const user = JSON.parse(localStorage.getItem('user')!);
    const accessToken = user ? user.accessToken : undefined;
    const idUser = user && user.user ? user.user._id : undefined;
    this.checkout.name=user.user.name;
    this.checkout.email=user.user.email;
    this.checkout.cart= user.user.cart
  
    console.log(this.checkout);
    
  }
  ngOnInit() {
    this.getProvinces();
  }
  getProvinces() {
    this.provinceApiService.getAllProvinces().subscribe(
      data => {
        this.provinces = data;
        this.checkout.province = this.provinceId
        console.log(this.checkout);
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.checkout.province);
  }
  getDistrictsByProvinceId(provinceId: any) {
    const data = provinceId.target.value;
    this.provinceApiService.getDistrictsByProvinceId(data).subscribe((data:any) => {
        console.log(data);
      this.checkout.
      this.districts = data.districts;
      },
      error => {
        console.log(error);
      }
    );
  }
  getWardsByDistrictId(districtId: any) {
    const data = districtId.target.value;
    console.log(data);
 
    
    this.provinceApiService.getWardsByDistrictId(data).subscribe(
      (data:any) => {
        this.wards = data.wards;
        console.log(data);
        
      },
      error => {
        console.log(error);
      }
    );
  }
  
}
