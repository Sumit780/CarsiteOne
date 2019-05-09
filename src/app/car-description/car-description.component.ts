import { Component, OnInit } from '@angular/core';
import { CarInfo, allCarExtraInfo } from '../car-info';
import { CarDataTransferService } from '../car-data-transfer.service';
import { CarDetails, allCarDetails } from '../car-details';


@Component({
  selector: 'app-car-description',
  templateUrl: './car-description.component.html',
  styleUrls: ['./car-description.component.css']
})
export class CarDescriptionComponent implements OnInit {
  model:string;
  carData:CarDetails[]=allCarDetails;
  carDesc:CarInfo[]=allCarExtraInfo;

  extraInfo:string[];
  extraCarData:CarDetails;
  constructor(private carDataTransfer:CarDataTransferService) { }

  ngOnInit() {
    let id=this.carDataTransfer.id;
    let data=this.carDesc.find(item=>item.id==id);
    this.extraInfo=data.extraInfo;
    
    this.extraCarData= this.carData.find(item=>item.id==id);
    this.model=this.extraCarData.model;
    this.carDataTransfer.Breadcrum(this.model)
    
  }

}
