import { Component, OnInit, Input } from '@angular/core';
import { Images ,allCarImageCrousel} from '../images';
import { CarDataTransferService } from '../car-data-transfer.service';

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {
  id:number;
  imageURLList:string[];
  allcarImages:Images[]=allCarImageCrousel;
  constructor(private carDataTransfer:CarDataTransferService) { }
  



  ngOnInit() {
    this.id=this.carDataTransfer.id;
    let data=this.allcarImages.find(item=>item.id==this.id)
    this.imageURLList=data.urls;
    console.log("crouselImages",this.imageURLList)
  }

}
