import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TipoCausa} from '../models/tipo-causa';

@Injectable({
  providedIn: 'root'
})
export class TipoCausaService {

  url = environment.url + 'competencia-tipo-causa';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  listarTipoCausaPorCompetencia(idCompetencia: number): Observable<TipoCausa[]> {
    return this.http.get<TipoCausa[]>(this.url + '/listar-comp-tipo-causa/' + idCompetencia);
  }
}

