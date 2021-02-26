///<reference path="../../../node_modules/rxjs/internal/Observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ActivatedRoute} from "@angular/router";
import {ProviderService} from "../provider.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode:number=1;
  contact:Contact=new Contact();
  idContact:number;

  constructor(public activatedRoute:ActivatedRoute,
              public  providerser: ProviderService) {
  // console.log(activatedRoute.snapshot.params['id']);
    this.idContact= activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.providerser.getContacts(this.idContact)
      .subscribe(data=>{
        this.contact=data;
      },err =>{
        console.log(err);
      })
  }


  updateContact(id: number){

  }

   saveContact(){
    this.providerser.saveContact(this.contact)
      .subscribe(data=>{
        this.mode=2;
      })
  }

}
