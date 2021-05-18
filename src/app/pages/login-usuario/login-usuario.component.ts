import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../../services/usuario.service';
import Swal from 'sweetalert2';
import {Usuario} from '../../models/usuario';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  loginForm: FormGroup;
  private codUsuario: number;
  private password: string;
  private usuario: Usuario;
  private nroIntentos: number;
  private contador = 0;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private modalService: NgbModal,
              private router: Router,
              private route: ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
      codUsuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginForm.reset();
  }

  public login(): void {
    this.nroIntentos = 3;
    this.codUsuario = this.loginForm.get('codUsuario').value;
    this.password = this.loginForm.get('password').value;
    this.usuarioService.buscarUsuario(this.codUsuario, this.password).subscribe(data => {
      if (data.id != -1) {
        this.contador = 0;
        this.guardarUsuarioEnSesion(data);
        this.router.navigate(['/menu-principal'], {relativeTo: this.route.parent});
      } else {
        this.contador++;
        if (this.contador == this.nroIntentos) {
          const usuario: Usuario = new Usuario();
          usuario.codUsuario = this.loginForm.get('codUsuario').value;
          this.usuarioService.bloquearUsuario(usuario).subscribe(data => {
            if (data.codUsuario != 0 && data.flgActivo == 0) {
              this.onSubmit();
              Swal.fire({
                title: 'Error',
                text: 'Usuario bloqueado',
                icon: 'warning',
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
            title: 'Datos incorrectos',
            text: 'Usuario o password incorrectos',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
        }
      }
    }, error => {
      Swal.fire({
        title: 'Error',
        text: 'Reintente mas tarde',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });

  }

  public guardarUsuarioEnSesion(usuario: Usuario): void {
    if (typeof (Storage) !== 'undefined') {
      sessionStorage.setItem('UsuarioLogin', JSON.stringify(usuario));
    }
  }

  public usuarioBloqueado(): void {

    if (this.loginForm.get('codUsuario').valid && this.loginForm.get('password').valid) {
      this.usuarioService.buscarPorRut(parseInt(this.loginForm.get('codUsuario').value)).subscribe(data => {
        if (data.id == -1) {
          Swal.fire({
            title: 'Error',
            text: 'Usuario no existe en el sistema, ¿desea crearlo?',
            icon: 'error',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/crear-usuario'], {relativeTo: this.route.parent});
            }
          });
        } else {
          this.usuarioService.buscarPorRut(parseInt(this.loginForm.get('codUsuario').value)).subscribe(data => {
            if (data.id != -1 && data.flgActivo == 0) {
              Swal.fire({
                title: 'Error',
                text: 'Usuario bloqueado',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
            } else {
              this.login();
            }
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Debe completar todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}
