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
  constructor(private provinceApiService: MapService) { }

  ngOnInit() {
    this.getProvinces();
  }

  getProvinces() {
    this.provinceApiService.getAllProvinces().subscribe(
      data => {
        this.provinces = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getDistrictsByProvinceId(provinceId: any) {
    const data = provinceId.target.value;
    this.provinceApiService.getDistrictsByProvinceId(data).subscribe((data:any) => {
        console.log(data);

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
