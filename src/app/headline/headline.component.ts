import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor(private api:NewsapiService) { }
  data:any=[]
  ngOnInit(): void {
    this.api.tcheadline().subscribe((result)=>
    {
      console.log(result)
      this.data=result.articles
    })
  }

}
