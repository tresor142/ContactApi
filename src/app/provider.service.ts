import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from "../model/model.contact";


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(public http: HttpClient) { }

  public getContact(){
    return this.http.get("http://localhost:8080/listes").pipe();
  }

    public saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/listes",contact).pipe();
  }

   public getContacts(id:number){
    return this.http.get("http://localhost:8080/listes/"+  id).pipe();
  }

}
