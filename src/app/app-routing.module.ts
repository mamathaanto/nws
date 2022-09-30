import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuisnessComponent } from './buisness/buisness.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HeadlineComponent } from './headline/headline.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [{path:'',redirectTo:'headline',pathMatch:'full'},
  {path:'', component:HeadlineComponent},
{path:'tech',component:TechComponent},
{path:'buisness',component:BuisnessComponent},
{path:'entertainment',component:EntertainmentComponent},
{path:'health',component:HealthComponent},
{path:'science',component:ScienceComponent},
{path:'sports',component:SportsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
