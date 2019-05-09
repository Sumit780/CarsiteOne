import { Component, OnInit, Input } from '@angular/core';
import { CarDetails } from '../car-details';
import { Router, ActivatedRoute } from '@angular/router';
import { CarDataTransferService } from '../car-data-transfer.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
@Input() carData:CarDetails;
make:string;
  constructor(private router:Router,private route:ActivatedRoute, private cardatatransferService:CarDataTransferService) { }
carExtraDetail(){
  this. make=this.carData.make;
  let id =this.carData.id;
  console.log(id);
 this.router.navigate(["./cardInfo"]);
  this.cardatatransferService.carDatatrans(id);
}
  ngOnInit() {
    this.cardatatransferService.Breadcrum(this.make)
  }

}
