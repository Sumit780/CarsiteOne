import { Component, OnInit } from '@angular/core';
import { CarDataTransferService } from '../car-data-transfer.service';
import { CarDetails, allCarDetails } from '../car-details';
import { Images, allCarImageCrousel } from '../images';

@Component({
  selector: 'app-card-info-in-detail',
  templateUrl: './card-info-in-detail.component.html',
  styleUrls: ['./card-info-in-detail.component.css']
})
export class CardInfoInDetailComponent implements OnInit {
  constructor(private cardDataTransferService:CarDataTransferService) { }
  cardetail:CarDetails[]=allCarDetails;
  carImages:Images[]=allCarImageCrousel;
  foundData:CarDetails;
  id:number;


  ngOnInit() {
this.id=this.cardDataTransferService.id;
 this.foundData = this.cardetail.find(item=>item.id==this.id)
console.log(this.foundData)
  }

}
