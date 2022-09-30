import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api:NewsapiService) { }
healthdata:any=[]
  ngOnInit(): void {
    this.api.tchealthnews().subscribe((result)=>{
      this.healthdata=result.articles
    })
  }

}
