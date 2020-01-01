import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MajorComponent } from './major/major.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantListComponent } from './Plants/plant-list/plant-list.component';
import { PlantDetailComponent } from './Plants/plant-detail/plant-detail.component';
import { PlantItemComponent } from './Plants/plant-list/plant-item/plant-item.component';
import { RecomsysComponent } from './recomsys/recomsys.component';

const appRoutes: Routes = [
  { path: '', component: MajorComponent},
  { path: 'lform', component: LoginFormComponent},
  { path: 'pdb', component: PlantsComponent},
  { path: 'rcms', component: RecomsysComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MajorComponent,
    HeaderComponent,
    LoginFormComponent,
    PlantsComponent,
    PlantListComponent,
    PlantDetailComponent,
    PlantItemComponent,
    RecomsysComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
