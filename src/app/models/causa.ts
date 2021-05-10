import {Tribunal} from "./tribunal";
import {Competencia} from "./competencia";

export class Causa {

  id: number;
  rolCausa: number;
  eraCausa: string;
  glosaParte: string;
  fechaIngresoCausa: string;
  fechaIngresoSistema: string;
  tribunalVO: Tribunal;
  competenciaVO: Competencia;
  tipoCausa: string;
  competencias: [];
  idUsuario: number;
  fechaInicio: string;
  fechaFinal: string;

  public constructor(init?: Partial<Causa>) {
    Object.assign(this, init as Causa);
  }

}
