import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from '../models/pays';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  host="http://localhost:8080/pays/"

  constructor(private client:HttpClient) { }
  public getAllCountry():Observable<Pays[]>{
    return this.client.get<Pays[]>(this.host+"all");
  }
  public getCountryById(id:number):Observable<Pays>{
    return this.client.get<Pays>(this.host+"findById/"+id);
  }
  public deleteCountry(id:number):Observable<Pays>{
    return this.client.delete<Pays>(this.host+"delete/"+id);
  }
  public addCountry(fd:FormData):Observable<void>{
    return this.client.post<void>(this.host+"add",fd);
  }
  public updateCountry(id:number,p:Pays):Observable<void>{
    return this.client.put<void>(this.host+"update"+id,p);
  }
}
