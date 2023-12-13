import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../modele/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // construteur
  constructor(private http: HttpClient) { }
  // declaration de la route de connexion
  private apiUrl = 'http://localhost:3000';

  // Récupérer la liste des réservations
  getReservationsList(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  // Créer une nouvelle réservation
  createReservation(reservationData: any): Observable<any> 
  {
    const createUrl = this.apiUrl + '/reservations'; 
    return this.http.post(createUrl, reservationData);
  }

  Delete(reservation: Reservation ): Observable<Reservation> 
  {
    const deleteUrl = `${this.apiUrl}/reservations/${reservation.id}`; 
    return this.http.delete<Reservation>(deleteUrl);

}

SetStatu(rese:Reservation): Observable<any> 
{
  
  const updateUrl = `${this.apiUrl}/reservations/${rese.id}`; 
    return this.http.put(updateUrl, rese);
}

}