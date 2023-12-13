import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../modele/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  // declaration de la route de connexion
  private apiUrl = 'http://localhost:3000';
  // construteur
  constructor(private http: HttpClient) { }


   // Créer une nouvelle voiture
createVoiture(voitureData: Voiture): Observable<any> 
{ 
    const createUrl = this.apiUrl + '/voitures'; 
    return this.http.post(createUrl, voitureData);
}

Delete(voiture: Voiture ): Observable<Voiture> 
{
  const deleteUrl = `${this.apiUrl}/voitures/${voiture.id}`; 
  return this.http.delete<Voiture>(deleteUrl);

}

  // Récupérer la liste des voitures
  getVoitures(): Observable<Voiture[]>
  {
   return this.http.get<Voiture[]>(this.apiUrl+'/voitures');
  }

SetStatu(voiture:Voiture): Observable<any> 
{
  
  const updateUrl = `${this.apiUrl}/voitures/${voiture.id}`; 
    return this.http.put(updateUrl, voiture);
}

Updatevoiture(voiture:Voiture): Observable<any> 
{
  
  const updateUrl = `${this.apiUrl}/voitures/${voiture.id}`; 
    return this.http.put(updateUrl, voiture);
}


getbyid(id:any):Observable<Voiture>
{
  const updateUrl = `${this.apiUrl}/voitures/${id}`; 
  return this.http.get<Voiture>(updateUrl);
}
}
