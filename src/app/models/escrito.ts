import {TipoEscrito} from './tipo-escrito';

export class Escrito {
  id: number;
  idDocumento: number;
  numeroFolio: number;
  fechaPresentacion: Date;
  tipoEscritoVO: TipoEscrito;
  referencia: string;
  idCuaderno: number;

  public constructor(init?: Partial<Escrito>) {
    Object.assign(this, init as Escrito);
  }
}