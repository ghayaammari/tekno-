import { GerervendeurComponent } from './GererVendeurComponents/gerervendeur/gerervendeur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParametrecompteComponent } from './settingsVendeurAdmin/parametrecompte/parametrecompte.component';
import { ParametreconsommateurComponent } from './ConsumerComponents/parametreconsommateur/parametreconsommateur.component';
import { ParametreboutiqueComponent } from './settingsVendeurAdmin/parametreboutique/parametreboutique.component';
import { MaSelectionComponent } from './ConsumerComponents/ma-selection/ma-selection.component';
import { AjouterComponent } from './GererProduitComponents/ajouter/ajouter.component';
import { ModifierComponent } from './GererProduitComponents/modifier/modifier.component';
import { ConsulterComponent } from './GererProduitComponents/consulter/consulter.component';
import { GererComponent } from './GererProduitComponents/gerer/gerer.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // gerer vendeur un seul component btbi3to 
      { path: 'gerervendeur', component: GerervendeurComponent },
      { path: '', redirectTo: 'gererProduct', pathMatch: 'full' },
      // gerer product 
      {
        path: 'gererProduct',
        component: GererComponent,
        children: [
          { path: 'ajouter', component: AjouterComponent },
          { path: 'modifier/:id', component: ModifierComponent },
          { path: 'consulter', component: ConsulterComponent },
        ],
      },
      { path: 'parametre', component: ParametrecompteComponent },
      {
        path: 'parametreconsommateur',
        component: ParametreconsommateurComponent,
      },
      { path: 'parametre-boutique', component: ParametreboutiqueComponent },
      { path: 'ma-selection', component: MaSelectionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
