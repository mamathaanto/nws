import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private api:NewsapiService) { }
  sciencedata:any=[]
  ngOnInit(): void {
    this.api.tcsciencenews().subscribe((result)=>{
      this.sciencedata=result.articles
    })
  }

}
