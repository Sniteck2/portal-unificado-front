export class Competencia{
  id: number;
  glosa: string;
  idfLetra: string;
  flgActivo: number;
  orden: number;
  nuevaGlosa: number;
  cantidadComp: number;

  public constructor(init?: Partial<Competencia>) {
    Object.assign(this, init as Competencia);
  }
}
