import { NgModule } from '@angular/core';

import { ReservationService } from './services/reservation.service';
import { VoitureService } from '../admin/services/voiture.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreationReservationComponent } from './components/creation-reservation/creation-reservation.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: 'creation-reservations', component: MenuComponent }
];


@NgModule({
  declarations: [
   
  CreationReservationComponent,
      MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,FormsModule,RouterModule.forChild(routes)
  ],
  providers: [ReservationService,VoitureService]
})
export class ClientModule { }
