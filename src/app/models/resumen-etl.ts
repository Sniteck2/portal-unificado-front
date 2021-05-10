import {Resumen} from './resumen';

export class ResumenEtl {

  resumenCausaVOS: Resumen[];
  resumenCuadernoVOS: Resumen[];
  resumenEscritoVOS: Resumen[];
  resumenParteVOS: Resumen[];
  resumenTramiteVOS: Resumen[];

  public constructor(init?: Partial<ResumenEtl>) {
    Object.assign(this, init as ResumenEtl);
  }
}
