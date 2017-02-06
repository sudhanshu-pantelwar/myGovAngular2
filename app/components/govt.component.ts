import { Component } from '@angular/core';
import { GovtService } from '../services/govt.service';
import { NgForm } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'mygov',
  templateUrl:'govt.component.html',
  providers: [ GovtService ]
})
export class GovtComponent  { 
    name: any;
    email: any;
    govtJson: any;
    constructor(private govtService: GovtService){
       
      };

    govtData(form: any){
        console.log("sudhanshuJashoria");
        console.log(form);
        // this.govtJson = "sudhanshu Jashoria";
        this.govtService.putData(form)
    .subscribe(
      data => {console.log(data);
      
    });
  }
}