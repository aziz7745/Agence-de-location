import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Voiture } from 'src/app/admin/modele/voiture';
import { VoitureService } from 'src/app/admin/services/voiture.service';
import { Reservation } from 'src/app/client/modele/reservation';
import { ReservationService } from 'src/app/client/services/reservation.service';

;

@Component({
  selector: 'app-creation-reservation',
  templateUrl: './creation-reservation.component.html',
  styleUrls: ['./creation-reservation.component.css']
})
export class CreationReservationComponent {

  reserveOn = true;
   @Input() message!: string;
   @Output() reserver = new EventEmitter<Reservation>();
  reservationData: Reservation = new Reservation();
  listvoiture:Voiture[]=[];
  MatriculeCarAReserver:string='';
  datedebu!:Date;
  datefin!:Date;
  idvoiture!:string;

  constructor (private reservationService: ReservationService,private ServiceVoiture:VoitureService) { }

  ngOnInit(): void 
  {
    this.listvoiture=[]
  }


  GetByMarque({value,valid} : NgForm)
  {
    this.datedebu=value.datedeb;
    this.datefin=value.datefin;
    this.ServiceVoiture.getVoitures().subscribe(
      (data) => {
        for (const voiture of data) 
        {
          
              if((voiture.modele==value.modele ||voiture.marque==value.marque) && voiture.statut=="false")
              {
                this.listvoiture.push(voiture)
              }

        }
        this.reserveOn=false;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  Reserver({value,valid} : NgForm)
  {
    this.reservationData.matricule=this.MatriculeCarAReserver;
    this.reservationData.idvoiture=this.idvoiture;
    this.reservationData.dateReservation=this.datedebu;
    this.reservationData.dateRetour=this.datefin;
    this.reservationData.propretaire=value.nompre;
    this.reservationData.NumTel=value.numtel;

    //cree une reservation
   this.sendReservationToParent();
  }


  public sendReservationToParent() {
    this.reserver.emit(this.reservationData);
}

  setIdVoiture(matricule:any,id:any)
  {
    this.MatriculeCarAReserver=matricule;
    this.idvoiture=id;
  }


  
  }




