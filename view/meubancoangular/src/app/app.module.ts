import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { HomeComponent } from './pages/home/home.component';
import { EstudoComponent } from './components/estudo/estudo.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { ValorComponent } from './components/valor/valor.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { HttpClientModule} from '@angular/common/http';
import { ContasComponent } from './pages/contas/contas.component';
import { CadastroEdicaoClientesComponent } from './pages/clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { CadastroContaComponent } from './pages/contas/cadastro-conta/cadastro-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SaqueComponent,
    DepositoComponent,
    HomeComponent,
    EstudoComponent,
    LabelInputComponent,
    CheckboxComponent,
    ButtonComponent,
    ValorComponent,
    ClientesComponent,
    CadastroClienteComponent,
    ContasComponent,
    CadastroEdicaoClientesComponent,
    TransferenciaComponent,
    CadastroContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
