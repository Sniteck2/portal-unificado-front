import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../../models/usuario';
import {UsuarioService} from '../../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent implements OnInit {

  creaForm: FormGroup;
  private correo: string;
  private id: number;
  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService) {}

  ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('UsuarioLogin'));
    this.correo = data.correo;
    this.id = data.id;
    this.preCarga();
  }

  private preCarga(): void {
    this.creaForm = this.formBuilder.group({
      correo: [this.correo, Validators.required],
      password: ['', Validators.required]
    });
  }

  public modificarUsuario(): void {
    const usuario: Usuario = new Usuario();
    usuario.id = this.id;
    if (this.creaForm.get('correo').valid) {
      usuario.correo = this.creaForm.get('correo').value;
    } else {
      usuario.correo = null;
    }
    if (this.creaForm.get('password').valid) {
      usuario.password = this.creaForm.get('password').value;
    } else {
      usuario.password = null;
    }
    this.usuarioService.modificarUsuario(usuario).subscribe(data => {
      Swal.fire({
        title: 'Éxito',
        text: 'Los datos han sido modificados con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }, error => {
      Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error, reintente más tarde',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    });
  }

}
