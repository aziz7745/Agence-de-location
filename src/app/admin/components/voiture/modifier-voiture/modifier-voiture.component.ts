import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VoitureService } from 'src/app/admin/services/voiture.service';


@Component({
  selector: 'app-modifier-voiture',
  templateUrl: './modifier-voiture.component.html',
  styleUrls: ['./modifier-voiture.component.css']
})
export class ModifierVoitureComponent implements OnInit {
  voitureId: any;
  voitureData: any;
  type="Modifier la Voiture";
  constructor(private route:ActivatedRoute,private servicevoiture:VoitureService) 
  { 
     
   
  }
  ngOnInit() 
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.voitureId=id;
    this.servicevoiture.getbyid(this.voitureId).subscribe(
      data=>{this.voitureData=data;},
      error=>{console.log("voiture not found")}
      );
  }

  UpdateCar({value,valid} : NgForm)
  {

    this.voitureData.matricule=value.matricule;
    this.voitureData.modele=value.modele;
    this.voitureData.marque=value.marque;
    this.voitureData.kilometrage=value.kilometrage;
    this.voitureData.couleur=value.couleur;
    this.voitureData.prix=value.prix;
    this.voitureData.annee=value.annee;
    this.servicevoiture.Updatevoiture(this.voitureData).subscribe(
      data=>{console.log("modification est bien effectuéé");
    this.ngOnInit()},
      error=>{console.log("probléme de modification")}
    )
      
  }


  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.voitureData.image = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
