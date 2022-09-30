import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsapiService } from './newsapi.service';
import { TechComponent } from './tech/tech.component';
import { BuisnessComponent } from './buisness/buisness.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    TechComponent,
    BuisnessComponent,
    EntertainmentComponent,
    ScienceComponent,
    HealthComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
