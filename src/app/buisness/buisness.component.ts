import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-buisness',
  templateUrl: './buisness.component.html',
  styleUrls: ['./buisness.component.css']
})
export class BuisnessComponent implements OnInit {

  constructor(private api:NewsapiService) { }
buisnessdata:any=[]
  ngOnInit(): void {
    this.api.tcbuisnessnews().subscribe((result)=>{
      this.buisnessdata=result.articles
    })
  }

}
