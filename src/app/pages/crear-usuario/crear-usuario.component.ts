import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../models/usuario';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  creaForm: FormGroup;
  private usuario: Usuario;

  genero = [
    {value: 'F', nombre: 'Femenino'},
    {value: 'M', nombre: 'Masculino'},
    {value: 'O', nombre: 'Otro'}
  ];



  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService) {
    this.creaForm = this.formBuilder.group({
      rut: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      appPaterno: ['', Validators.required],
      appMaterno: ['', Validators.required],
      correo: ['', Validators.required],
      sexo: ['', Validators.required],
      fechaNac: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  guardarUsuario(): void {
    if (this.creaForm.get('rut').valid || this.creaForm.get('nombreUsuario').valid || this.creaForm.get('appPaterno').valid
    || this.creaForm.get('appMaterno').valid || this.creaForm.get('correo').valid || this.creaForm.get('sexo').valid
    || this.creaForm.get('fechaNac').valid || this.creaForm.get('password').valid) {
      let usuario: Usuario = new Usuario();
      usuario = this.crearUsuario();
      this.usuarioService.guardarUsuario(usuario).subscribe( data => {
        console.log(data.id);
        if (data.id !== -2) {
          Swal.fire({
            title: 'Éxito',
            text: 'Usuario creado',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        } else {
          Swal.fire({
            title: 'Advertencia',
            text: 'Usuario ya existe',
            icon: 'info',
            confirmButtonText: 'Aceptar'
          });
        }
      }, error => {
        Swal.fire({
          title: 'Error',
          text: 'Reintente mas tarde',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos deben ser llenados',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  private quitarDv(rut: string): string {
    const rutSinDv: string = rut.substring(0, rut.length - 1);
    return rutSinDv;
  }

  private crearUsuario(): Usuario {
    const usuario: Usuario = new Usuario();
    const rut: string = this.creaForm.get('rut').value;
    const pass: string = this.creaForm.get('password').value;
    const sexo = this.creaForm.get('sexo').value;
    if (pass.length < 8) {
      Swal.fire({
        title: 'Error',
        text: 'La contraseña debe ser mayor o igual a 8 caracteres',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
    if (rut.length > 9 && rut.length < 8) {
      Swal.fire({
        title: 'Error',
        text: 'Rut mal ingresado, debe ser sin punto ni guión',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    } else {
      usuario.codUsuario = parseInt(this.quitarDv(this.creaForm.get('rut').value));
      usuario.rut = parseInt(this.quitarDv(this.creaForm.get('rut').value));
      usuario.dv = rut.substring(rut.length - 1);
      usuario.nombre = this.creaForm.get('nombreUsuario').value;
      usuario.appPaterno = this.creaForm.get('appPaterno').value;
      usuario.appMaterno = this.creaForm.get('appMaterno').value;
      usuario.correo = this.creaForm.get('correo').value;
      usuario.sexo = sexo.value;
      usuario.fechaNacimiento = this.creaForm.get('fechaNac').value;
      usuario.password = this.creaForm.get('password').value;
    }
    return usuario;
  }

}
