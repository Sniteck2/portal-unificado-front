export class Tribunal {
  id: number;
  codCorte: number;
  tipJuridisccion: number;
  glosa: string;
  flgActivo: number;

  public constructor(init?: Partial<Tribunal>) {
    Object.assign(this, init as Tribunal);
  }
}
