export class Resumen {
  id: number;
  fechaInicio: Date;
  fechaTermino: Date;
  totalRegistroBase: number;
  totalRegistroBaseEstimada: number;
  totalRegistroPortal: number;
  tiempo: string;

  public constructor(init?: Partial<Resumen>) {
    Object.assign(this, init as Resumen);
  }
}
