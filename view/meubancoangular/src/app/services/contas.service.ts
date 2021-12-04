import { ISaqueDeposito } from './../interfaces/saque-deposito';
import { HttpClient } from '@angular/common/http';
import { IContas } from './../interfaces/contas';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  api = `${environment.api}/contas/`;

  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IContas[]>(this.api);
  }

  saque(saque: ISaqueDeposito){
    return this.http.post(`${this.api}/saque`, saque);
  }

  deposito(saque: ISaqueDeposito){
    return this.http.post(`${this.api}/deposito`, saque);
  }
}
