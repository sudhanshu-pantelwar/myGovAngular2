import { Component } from '@angular/core';
import { GovtService } from '../services/govt.service';
@Component({
  moduleId: module.id,
  selector: 'mydata',
  templateUrl:'getData.component.html',
  providers: [ GovtService ]
})
export class GetDataComponent  { 
    myItems: any;
    items: any;
    constructor(private govtService: GovtService){
       this.getData();
      };

    getData(){
        console.log("sudhanshuJashoria");
    this.items = this.govtService.getData()
    .subscribe(response => {
        console.log(response);
        this.myItems = JSON.stringify(response);
    });
    // .subscribe(
    //   data => {console.log(data);
    //   this.items = data;
      
    // });
  }
}