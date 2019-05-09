import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDataTransferService {

private message=new Subject<number>();
message$=this.message.asObservable();

private message1=new Subject<string>();
message1$=this.message.asObservable();

id:number;
BreadCrumArr:string[]=[];

  
carDatatrans(x:number){
this.message.next(x);
this.id=x;
console.log(this.id)
}

Breadcrum(x:string){
this.message1.next(x);
this.BreadCrumArr.push(x);
console.log("funcData",x)
console.log("breadCrum",this.BreadCrumArr)


}

  constructor() { }
}
