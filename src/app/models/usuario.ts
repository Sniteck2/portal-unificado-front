export class Usuario{
  id: number;
  codUsuario: number;
  password: string;
  rut: number;
  dv: string;
  nombre: string;
  appPaterno: string;
  appMaterno: string;
  correo: string;
  numeroIntentos: number;
  sexo: string;
  fechaNacimiento: string;
  flgActivo: number;

  public constructor(init?: Partial<Usuario>) {
    Object.assign(this, init as Usuario);
  }
}
