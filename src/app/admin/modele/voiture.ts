
export class Voiture 
{
  matricule?: string;
  id?: string;
  modele: string;
  marque:string;
  couleur: string;
  prix: number;
  kilometrage:number;
  annee: number;
  image: any;
  statut: string;

  constructor(){
    this.modele ='';
    this.marque ='';
    this.kilometrage = 0;
    this.couleur = '';
    this.prix = 0;
    this.annee= 0;
    this.statut = "false";
  }
}
