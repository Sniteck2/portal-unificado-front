import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tramite} from '../models/tramite';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  url = environment.url + 'tramite';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  listarTramitePorCausa(idCausa: number): Observable<Tramite[]> {
    return this.http.get<Tramite[]>(this.url + '/listar-tramite-por-causa/' + idCausa);
  }
}
