import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/admin/modele/voiture';
import { VoitureService } from 'src/app/admin/services/voiture.service';


@Component({
  selector: 'app-listvoiture',
  templateUrl: './listvoiture.component.html',
  styleUrls: ['./listvoiture.component.css']
})
export class ListvoitureComponent implements OnInit
{

  listvoiture:Voiture[]=[];

  constructor(public ServiceVoiture:VoitureService)
  {}


  ngOnInit() 
  {
    this.ServiceVoiture.getVoitures().subscribe(
      (data) => {
        // Handle the data here
        this.listvoiture= data;
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(voiture:Voiture)
  {
    this.ServiceVoiture.Delete(voiture).subscribe(
      (Response)=>{
        this.ngOnInit();
      },
      (error)=>{console.error(error);
      }
      );

    
  }
}
