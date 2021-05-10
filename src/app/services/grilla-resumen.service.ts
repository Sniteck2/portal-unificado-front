import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResumenEtl} from '../models/resumen-etl';

@Injectable({
  providedIn: 'root'
})
export class GrillaResumenService {

  url = environment.url + 'resumen-etl';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  listarResumenEtl(): Observable<ResumenEtl> {
    return this.http.get<ResumenEtl>(this.url + '/listar-todo/');
  }
}
