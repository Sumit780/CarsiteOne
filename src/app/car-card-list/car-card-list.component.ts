import { Component, OnInit, Input } from '@angular/core';
import { CarDetails } from '../car-details';
import { Router, ActivatedRoute } from '@angular/router';
import { CarDataTransferService } from '../car-data-transfer.service';

@Component({
  selector: 'app-car-card-list',
  templateUrl: './car-card-list.component.html',
  styleUrls: ['./car-card-list.component.css']
})
export class CarCardListComponent implements OnInit {
 @Input() carData:CarDetails;
 make:string;
  constructor(private router:Router,private route:ActivatedRoute, private cardatatransferService:CarDataTransferService) { }
  carExtraDetail(){
    let id =this.carData.id;
    this.make=this.carData.make
    console.log(id);
   this.router.navigate(["./cardInfo"]);
    this.cardatatransferService.carDatatrans(id);
  }
  ngOnInit() {
    this.cardatatransferService.Breadcrum(this.make);
  }

}
