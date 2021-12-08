import { ICliente } from "./cliente";

export interface IContas {
  id: number;
  agencia: string;
  cliente: ICliente;
  saldo: number;
  numero: string;
}
