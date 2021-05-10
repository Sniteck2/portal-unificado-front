import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Causa} from "../models/causa";

@Injectable({
  providedIn: 'root'
})
export class CausaService {

  url = environment.url + 'causa';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  buscarCausa(idCompetencia: number, idTribunal: number, tipoCausa: string, rolCausa: string, anio: string): Observable<Causa> {
    return this.http.get<Causa>(this.url + '/buscar-causa/' + rolCausa + '/' + anio + '/' + tipoCausa + '/' + idTribunal + '/' + idCompetencia);
  }

  buscarCausaParte(causa: Causa): Observable<Causa[]> {
    return this.http.post<Causa[]>(this.url + '/buscar-causas-usuario-fecha/', causa, this.httpOptions);
  }
}
