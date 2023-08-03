import { Component, OnInit } from '@angular/core';
import { Produit2 } from 'src/app/model/produit2.model';
import { Produit2Service } from 'src/app/service/produit2/produit2.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
})
export class AjouterComponent implements OnInit {
  newProduit: Produit2 = new Produit2();
  url = 'https://img.icons8.com/ios/100/000000/contract-job.jpg';
  newUrl: string = '';
  constructor(private produitService: Produit2Service) {}

  ngOnInit(): void {
    this.newProduit.urls = [''];
  }

  ajouterProduit() {
    // Call the service to add the new product to the list
    this.produitService.ajouterProduit(this.newProduit);

    // Clear the form fields and reset the newProduit object
    this.newProduit = new Produit2();
    // Add the URL input value to the newProduit.urls array
    this.newUrl = '';
  }

  ajouterUrl() {
    // Add the new URL to the 'urls' array of the 'newProduit' object
    if (this.newUrl.trim() !== '') {
      this.newProduit.urls?.push(this.newUrl);
      this.newUrl = ''; // Clear the 'newUrl' variable for the next input
    }
  }

  onSelect(event: any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/) != null) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.newProduit.imageUrl = this.url; // Set the image URL for the new product
      };
    }
  }
}
