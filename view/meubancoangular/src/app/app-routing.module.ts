import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { ContasComponent } from './pages/contas/contas.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { CadastroContaComponent } from './pages/contas/cadastro-conta/cadastro-conta.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'contas', component: ContasComponent},
  {path: 'saque', component: SaqueComponent},
  {path: 'deposito', component: DepositoComponent},
  {path: 'cadastro-cliente', component: CadastroClienteComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'cadastro-conta', component: CadastroContaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
