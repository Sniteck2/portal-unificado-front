import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.url + 'usuario-causa/';
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  buscarUsuario(codUsuario: number, password: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + 'buscar-usuario/' + codUsuario + '/' + password);
  }

  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + 'guardar-usuario/', usuario, this.httpOptions);
  }

  bloquearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + 'bloquear-usuario/', usuario, this.httpOptions);
  }

  buscarPorRut(codUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + 'buscar-por-rut/' + codUsuario);
  }

  modificarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + 'modificar-usuario/', usuario, this.httpOptions);
  }
}
