import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContasService } from 'src/app/services/contas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ICadastroConta } from 'src/app/interfaces/cadastro-conta';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  formGroup: FormGroup = new FormGroup ({
    agencia: new FormControl('', Validators.required),
    cliente: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required)
  });

  cadastrarConta() {
    const cadastroConta: ICadastroConta = this.formGroup.value;
    this.contasService.cadastrar(cadastroConta).subscribe(clienteAPI => {
      Swal.fire('Cadastrado com sucesso!');
      this.router.navigate(['/contas']);
    }, error => {
      console.log(error);
    });
  }

  get cliente(){
    return this.formGroup.get('cliente');
  }
  get agencia() {
    return this.formGroup.get('agencia');
  }
  get numero() {
    return this.formGroup.get('numero');
  }
  get saldo() {
    return this.formGroup.get('saldo');
  }
}
