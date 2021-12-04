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

  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {}

    formGroup: FormGroup = new FormGroup({
      'id' : new FormControl(null),
      'name' : new FormControl('', Validators.required),
      'cpf' : new FormControl('', Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'observacoes' : new FormControl(''),
      'ativo' : new FormControl(true)
    });

  enviar() {
    const cliente: ICliente = this.formGroup.value;
    this.clienteService.cadastrar(cliente).subscribe(clienteAPI => {
      Swal.fire('FUNFOU!', 'Cadastrado com sucesso!');
      this.router.navigate(['/clientes']);
    }, error => {
      console.log(error);
    });
  }

  get id() {
    return this.formGroup.get('id');
  }
  get name() {
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
