import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from 'src/app/admin/modele/voiture';
import { VoitureService } from 'src/app/admin/services/voiture.service';
import { Reservation } from 'src/app/client/modele/reservation';
import { ReservationService } from 'src/app/client/services/reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  
  voi!:Voiture;

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService, private voitureservice:VoitureService) { }

  ngOnInit(): void {
    this.getReservationsList();
  }
  Delete(rese:Reservation)
  {
     
      this.voitureservice.getbyid(rese.idvoiture).subscribe(
        response=>{
          this.voi=response;
          this.voi.statut="false";
          this.confirmer(this.voi)
          },
        error => {
          console.error('voiture not found :', error);
        });

    this.reservationService.Delete(rese).subscribe(
      response => {
        console.error("la suppression est bien effectueé");
        this.ngOnInit();
      },
      error => {
        console.error(error);
      }
    );


  }

  getReservationsList(): void {

    this.reservationService.getReservationsList().subscribe(
      response => {
        this.reservations = response;
      },
      error => {
        console.error(error);
      }
    );
  }

  setChangeStatut(rese:Reservation){
   
    //modifier la statut de reservation
      rese.Statut=true;
      this.reservationService.SetStatu(rese).subscribe(
        response => {
          console.log('Statut modifier avec succès !', response);
        },
        error => {
          console.error('Erreur lors de la modification de statut :', error);
        }
      );

      //modifier la statut de voiture
      this.voitureservice.getbyid(rese.idvoiture).subscribe(
        response=>{
          this.voi=response;
          this.voi.statut="true";
          this.confirmer(this.voi)
          },
        error => {
          console.error('voiture not found :', error);
        });
    
  }
  confirmer(voiture:Voiture)
  {
   
           this.voitureservice.SetStatu(voiture).subscribe(
            response => {
              console.log('Statut modifier avec succès !', response);
            },
            error => {
              console.error('Erreur lors de la modification de statut :', error);
            }
          );
          }

    
  }


