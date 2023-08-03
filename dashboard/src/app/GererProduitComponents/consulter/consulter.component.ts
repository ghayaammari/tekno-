import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produit2 } from 'src/app/model/produit2.model';
import { Produit2Service } from 'src/app/service/produit2/produit2.service';
import { ModifierComponent } from '../modifier/modifier.component';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent {
  produits?: Produit2[];
  formModal: any

  constructor(private produitService: Produit2Service ,  private dialogref : MatDialog) {
    this.produits = [];
    this.produits = this.produitService.listeProduits();
  }

  // ngOnInit(): void {
    
  // }
  supprimerProduit(prod: Produit2) {
    let conf = confirm("Etes-vous sur ?");
    if (conf)
      this.produitService.supprimerProduit(prod);
  }
  url = 'https://img.icons8.com/ios/100/000000/contract-job.jpg';

  openDialog( categorie : string){
    this.dialogref.open(ModifierComponent,{
     width:'500px' , 
     data:{categorie:categorie},
    })
  }
  
}