import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  host="http://localhost:8080/entreprise/"

  constructor(private client:HttpClient) { }
  public getAllEntreprises():Observable<Entreprise[]>{
    return this.client.get<Entreprise[]>(this.host+"all");
}

public getEntrepriseById(id:number):Observable<Entreprise>{
  return this.client.get<Entreprise>(this.host+"findById/"+id);
}

public deleteEntreprise(id:number):Observable<Entreprise>{
  return this.client.delete<Entreprise>(this.host+"delete"+id)
}
public addEntreprise(fd:FormData):Observable<void>{
  return this.client.post<void>(this.host+"add",fd);
}
public updateEntreprise(id:number,e:Entreprise):Observable<void>{
  return this.client.put<void>(this.host+"update"+id,e);
}
}
