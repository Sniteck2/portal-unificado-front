import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tribunal} from '../models/tribunal';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  url = environment.url + 'tribunal-competencia/';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  listarTribunalesPorCompetencia(idCompetencia: number): Observable<Tribunal[]>{
    return this.http.get<Tribunal[]>(this.url + 'tribunal-por-competencia/' + idCompetencia);
  }
}
