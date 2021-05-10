export class TipoCausa {
  id: number;
  glosa: string;
  tipoCausa: string;
  flgActivo: number;

  public constructor(init?: Partial<TipoCausa>) {
    Object.assign(this, init as TipoCausa);
  }
}
