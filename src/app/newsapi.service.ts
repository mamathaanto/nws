import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  
 // headlinenews=' https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY'
 headlinenews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=0330aeb0b55c4e899e6f6655108aa339'

 technews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0330aeb0b55c4e899e6f6655108aa339'

 buisnessnews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0330aeb0b55c4e899e6f6655108aa339'

 entertainmentnews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0330aeb0b55c4e899e6f6655108aa339'

 sciencenews = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=0330aeb0b55c4e899e6f6655108aa339'

 healthnews = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0330aeb0b55c4e899e6f6655108aa339'

 sportsnews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0330aeb0b55c4e899e6f6655108aa339'

 tcbuisnessnews() : Observable<any> {
  return this.http.get(this.buisnessnews)
 }

 tcentertainmentnews() : Observable<any> {
  return this.http.get(this.entertainmentnews)
 }

 tcsciencenews() : Observable<any> {
  return this.http.get(this.sciencenews)
 }

 tchealthnews() : Observable<any> {
  return this.http.get(this.healthnews)
 }

 tcsportsnews() : Observable<any> {
  return this.http.get(this.sportsnews)
 }

tctechnews():Observable<any>{
  return this.http.get(this.technews)
 }

tcheadline(): Observable <any>{
      return this.http.get(this.headlinenews)

  }
}
