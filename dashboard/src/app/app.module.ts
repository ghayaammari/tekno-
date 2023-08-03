import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { GerervendeurComponent } from './GererVendeurComponents/gerervendeur/gerervendeur.component';
import { ParametrecompteComponent } from './settingsVendeurAdmin/parametrecompte/parametrecompte.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ParametreboutiqueComponent } from './settingsVendeurAdmin/parametreboutique/parametreboutique.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ParametreconsommateurComponent } from './ConsumerComponents/parametreconsommateur/parametreconsommateur.component';
import { MaSelectionComponent } from './ConsumerComponents/ma-selection/ma-selection.component';
import { AjouterComponent } from './GererProduitComponents/ajouter/ajouter.component';
import { ModifierComponent } from './GererProduitComponents/modifier/modifier.component';
import { ConsulterComponent } from './GererProduitComponents/consulter/consulter.component';
import { GererComponent } from './GererProduitComponents/gerer/gerer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GerervendeurComponent,
    ParametrecompteComponent,
    ParametreboutiqueComponent,
    ParametreconsommateurComponent,
    MaSelectionComponent,
    AjouterComponent,
    ModifierComponent,
    ConsulterComponent,
    GererComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
