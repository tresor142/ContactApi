import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ProviderService} from "../provider.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

 contact: Contact=new Contact();

 mode:number=1;
  constructor(public  providerser: ProviderService) { }

  ngOnInit() {
  }


  saveContact(){
    this.providerser.saveContact(this.contact)
      .subscribe(data=>{
        this.mode=2;
      })
  }
}
