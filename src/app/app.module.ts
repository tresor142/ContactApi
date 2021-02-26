import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContacsComponent } from './contacs/contacs.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import {ProviderService} from './provider.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const  appRoutes: Routes = [
  {path: 'about' , component: AboutComponent},
    {path: 'contact' , component: ContacsComponent},
      {path: 'editContact/:id' , component: EditContactComponent},
      {path: 'new-contact' , component: NewContactComponent
},
    {path: '', redirectTo : '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContacsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
