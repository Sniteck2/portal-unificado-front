export class TipoEscrito{
  id: number;
  glosa: string;
  flgActivo: number;
  fechaCreacion: Date;

  public constructor(init?: Partial<TipoEscrito>) {
    Object.assign(this, init as TipoEscrito);
  }
}