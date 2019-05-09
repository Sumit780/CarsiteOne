import { Component, OnInit } from '@angular/core';
import { CarDetails, allCarDetails } from '../car-details';
import { CarDataTransferService } from '../car-data-transfer.service';



@Component({
  selector: 'app-pannels',
  templateUrl: './pannels.component.html',
  styleUrls: ['./pannels.component.css']
})
export class PannelsComponent implements OnInit {
  carData:CarDetails[]=allCarDetails;  
  cardList:boolean=false;
  cardGrid :boolean=true;
  cardGallery:boolean=false;
  BredCrum:string="Home";

  constructor(private cardDataTransferService:CarDataTransferService) { }

      list(x:number){
      if(x==1){
      this.cardList=false;
      this.cardGrid=true;
     this.cardGallery=false;
        }
       }
      grid(x:number){
      if(x==2){
      this.cardList=true;
      this.cardGrid=false;
      this.cardGallery=false;     
      }
      }
      gallery(x:number){
      if(x==3){
      this.cardList=false;
      this.cardGrid=false;
      this.cardGallery=true;
          }
         }



  ngOnInit() {
     this.cardDataTransferService.Breadcrum(this.BredCrum);
     console.log("hello",this.BredCrum)
  }

}
