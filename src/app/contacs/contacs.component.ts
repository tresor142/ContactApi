import { Component, OnInit } from '@angular/core';
import {ProviderService} from "../provider.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-c',
  templateUrl: './contacs.component.html',
  styleUrls: ['./contacs.component.css']
})
export class ContacsComponent implements OnInit {
  pageContacts: any;
  motCle:String="";
  constructor(private providerser: ProviderService ,
              public router:Router) { }

  ngOnInit() {
    this.providerser.getContact().subscribe(data=>{
      this.pageContacts = data
      console.log(this.pageContacts);
    })
  }

  onEditContact(id: number){
    this.router.navigate(['editContact',id]);
  }


}
