export class Tramite {
  id: number;
  idDocumento: number;
  fecha: Date;
  tipoTramite: string;
  etapa: string;
  referencia: string;
  estadoFirma: string;

  public constructor(init?: Partial<Tramite>) {
    Object.assign(this, init as Tramite);
  }
}
