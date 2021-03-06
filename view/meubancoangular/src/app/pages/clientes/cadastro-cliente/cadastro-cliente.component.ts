import { ICliente } from './../../../interfaces/cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

    formGroup: FormGroup = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      observacoes: new FormControl(''),
      ativo: new FormControl(true)
    });

  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {}

  enviar() {
    const cliente: ICliente = this.formGroup.value;
    this.clienteService.cadastrar(cliente).subscribe(clienteAPI => {
      Swal.fire('Cadastrado com sucesso!');
      this.router.navigate(['/clientes']);
    }, error => {
      console.log(error);
    });
  }

  get nome() {
    return this.formGroup.get('name');
  }
  get cpf() {
    return this.formGroup.get('cpf');
  }
  get email() {
    return this.formGroup.get('email');
  }
  get observacoes() {
    return this.formGroup.get('observacoes');
  }
}
