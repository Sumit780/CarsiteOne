import { Component, OnInit, Input } from '@angular/core';
import { CarDetails } from '../car-details';
import { Router, ActivatedRoute } from '@angular/router';
import { CarDataTransferService } from '../car-data-transfer.service';

@Component({
  selector: 'app-car-card-gallery',
  templateUrl: './car-card-gallery.component.html',
  styleUrls: ['./car-card-gallery.component.css']
})
export class CarCardGalleryComponent implements OnInit {
 @Input() carData:CarDetails;
 make:string;
  constructor(private router:Router,private route:ActivatedRoute, private cardatatransferService:CarDataTransferService) { }
  carExtraDetail(){
    let id =this.carData.id;
      this.make=this.carData.make;
 this.router.navigate(["./cardInfo"]);
  this.cardatatransferService.carDatatrans(id);
  }
  ngOnInit() {
    this.cardatatransferService.Breadcrum(this.make)
  }

}
