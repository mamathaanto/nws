import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';


@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:NewsapiService) { }
  techdata:any=[]
  ngOnInit(): void {
    this.api.tctechnews().subscribe((result)=>{
      console.log(result.articles);
      this.techdata=result.articles
    })
  }

}
