
export class Reservation 
{
  id!:string;
  matricule!:string;
  idvoiture!:string;
  dateReservation: Date;
  dateRetour: Date;
  propretaire!:string;
  NumTel!:string;
  Statut!:Boolean;

  constructor() 
  {
    this.dateReservation = new Date();
    this.dateRetour = new Date();
    this.Statut=false;
  }
}
