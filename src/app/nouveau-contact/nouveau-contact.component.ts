import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ProviderService} from "../provider.service";


@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public  providerser : ProviderService) { }

  ngOnInit() {
  }


  onSaveContact(dataForm){
    //console.log(dataForm);
    this.providerser.saveContact(dataForm)
      .subscribe(data=>{
        console.log("OK")
      }, err =>{
        console.log(err);
      } );

  }

}
