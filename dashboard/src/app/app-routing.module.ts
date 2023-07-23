import { GerervendeurComponent } from './gerervendeur/gerervendeur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GererproduitComponent } from './gererproduit/gererproduit.component';
import { ParametrecompteComponent } from './parametrecompte/parametrecompte.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'gerervendeur',component:GerervendeurComponent},
    {path:'gererproduit',component:GererproduitComponent},
    {path:'parametre',component:ParametrecompteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
