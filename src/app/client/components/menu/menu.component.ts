import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../modele/reservation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  message:string="Réserver ici!!!";

  constructor (private reservationService: ReservationService) { }

  Reserver(event:Reservation)
  {
    //cree une reservation
    this.reservationService.createReservation(event)
    .subscribe(
      response => {
        console.log('Reservation ajoutée avec succès !', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout de la reservation :', error);
      }
    );
  }

}
