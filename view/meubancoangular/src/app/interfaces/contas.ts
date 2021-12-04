import { IClientedetalhe } from "./clientedetalhe";

export interface IContas {
  id: number;
  agencia: string;
  cliente: IClientedetalhe;
  saldo: number;
  numero: number;
}
