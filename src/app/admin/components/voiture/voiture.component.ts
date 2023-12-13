import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../../modele/voiture';
import { VoitureService } from '../../services/voiture.service';


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  voitures: Voiture[] = [];
  type:string="admin"

  constructor(private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
  }


 

 
}
