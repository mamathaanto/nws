import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private api:NewsapiService) { }
entertainmentdata:any=[]
  ngOnInit(): void {
    this.api.tcentertainmentnews().subscribe((result)=>{
      this.entertainmentdata=result.articles
    })
  }

}
