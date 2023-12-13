import { Component, Input, OnInit } from '@angular/core';


import { FormBuilder, NgForm } from '@angular/forms';
import { Voiture } from 'src/app/admin/modele/voiture';
import { VoitureService } from 'src/app/admin/services/voiture.service';


@Component({
  selector: 'app-creation-voiture',
  templateUrl: './creation-voiture.component.html',
  styleUrls: ['./creation-voiture.component.css']
})
export class CreationVoitureComponent implements OnInit {
  

  voitureData: Voiture = new Voiture();

 
  constructor(private voitureService: VoitureService,private fb: FormBuilder) { }

  ngOnInit()
  {
    

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

  AddCar({value,valid} : NgForm)
  {

    this.voitureData.matricule=value.matricule;
    this.voitureData.modele=value.modele;
    this.voitureData.marque=value.marque;
    this.voitureData.kilometrage=value.kilometrage;
    this.voitureData.couleur=value.couleur;
    this.voitureData.prix=value.prix;
    this.voitureData.annee=value.annee;
    this.voitureService.createVoiture(this.voitureData)
    .subscribe(
      response => {
        console.log('Voiture ajoutée avec succès !');
        window.location.reload();

  
      },
      error => {
        console.error('Erreur lors de l\'ajout de la voiture :', error);
      }
      
    );
    
  

  }




}
