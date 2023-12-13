import { NgModule } from '@angular/core';
import { VoitureComponent } from './components/voiture/voiture.component';
import { CreationVoitureComponent } from './components/voiture/creation-voiture/creation-voiture.component';
import { ModifierVoitureComponent } from './components/voiture/modifier-voiture/modifier-voiture.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VoitureService } from './services/voiture.service';
import { ListvoitureComponent } from './components/voiture/listvoiture/listvoiture.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationService } from '../client/services/reservation.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'voitures', component: VoitureComponent,
  children :[
    { path: '', component: ListvoitureComponent},
    { path: 'ajouter-voiture', component: CreationVoitureComponent },
    { path: 'modifier-voiture/:id', component: ModifierVoitureComponent },
  
    { path: 'reservations', component: ReservationComponent }
    
    
  ]}
 
  
];



@NgModule({
  declarations: [
    VoitureComponent,
    CreationVoitureComponent,
    ModifierVoitureComponent,
    ListvoitureComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,FormsModule,RouterModule.forChild(routes)
  ],
  providers: [VoitureService,ReservationService]
})
export class AdminModule { }
