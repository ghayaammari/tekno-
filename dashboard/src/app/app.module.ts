;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{MatIconModule} from '@angular/material/icon' 
import{MatSidenavModule} from '@angular/material/sidenav' 
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { GerervendeurComponent } from './gerervendeur/gerervendeur.component';
import { GererproduitComponent } from './gererproduit/gererproduit.component';
import { ParametrecompteComponent } from './parametrecompte/parametrecompte.component';
import {MatTabsModule} from '@angular/material/tabs';
import { VendeurpendingComponent } from './vendeurpending/vendeurpending.component';
import { ConsultervendeurComponent } from './consultervendeur/consultervendeur.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GerervendeurComponent,
    GererproduitComponent,
    ParametrecompteComponent,
    VendeurpendingComponent,
    ConsultervendeurComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
