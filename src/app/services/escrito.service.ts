import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Escrito} from '../models/escrito';

@Injectable({
  providedIn: 'root'
})
export class EscritoService {

  url = environment.url + 'escrito';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  listarEscritoPorCuaderno(idCuaderno: number): Observable<Escrito[]> {
    return this.http.get<Escrito[]>(this.url + '/listar-por-id-cuaderno/' + idCuaderno);
  }

}
