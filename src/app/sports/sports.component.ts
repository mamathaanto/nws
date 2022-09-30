import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api:NewsapiService) { }
  sportsdata:any=[]
  ngOnInit(): void {
    this.api.tcsportsnews().subscribe((result)=>{
      this.sportsdata=result.articles
    })
  }

}
