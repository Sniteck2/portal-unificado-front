import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Competencia} from '../models/competencia';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaServiceService {

  url = environment.url + 'competencia/';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  listarCompetencia(): Observable<Competencia[]>{
    return this.http.get<Competencia[]>(this.url + 'listar-competencia/');
  }
}
