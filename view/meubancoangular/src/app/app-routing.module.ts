import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { ContasComponent } from './pages/contas/contas.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'contas', component: ContasComponent},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'saque', component: SaqueComponent},
  {path: 'deposito', component: DepositoComponent},
  {path: 'cadastro-cliente', component: CadastroClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
