import { Component, OnInit } from '@angular/core';
import { CarDataTransferService } from '../car-data-transfer.service';
import { CarDetails, allCarDetails } from '../car-details';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {
carData:CarDetails[]=allCarDetails;
make:string;
model:string;
BreadCrumArr:string[]=["Home"];

  constructor(private cartransferService:CarDataTransferService) { }

  ngOnInit() {
   let id=this.cartransferService.id;
   let carData=this.carData.find(item=>item.id==id)
   this.make= carData.make;
   this.model=carData.model;
   this.BreadCrumArr.push(this.make);
   this.BreadCrumArr.push(this.model)

  
  }

}
