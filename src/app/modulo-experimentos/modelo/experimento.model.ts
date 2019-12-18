export class Experimento {
  public _id: string;
  public espectrometro: string;
  public sonda: string;
  public muestra: string;
  public solicitud: string;
  public nucleo: string;
  public usuario_entrada: string;
  public usuario_salida: string;
  public fecha_entrada: Date;
  public fecha_salida: Date;
  public completo: boolean;

  constructor() {
    this.fecha_entrada = new Date();
    this.fecha_salida = new Date();
    this.completo = false;
  }
}
