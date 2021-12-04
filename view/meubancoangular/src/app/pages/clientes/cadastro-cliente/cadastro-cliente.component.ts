import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  exform!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'cpf' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'telefone' : new FormControl(null,[
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$')
        ])
    });
  }

  botaoCadastro() {
    alert('Cadastro efetuado com sucesso!');
    console.log(this.exform.value);
    this.exform.reset();
  }

  get name() {
    return this.exform.get('name');
  }
  get cpf() {
    return this.exform.get('cpf');
  }
  get email() {
    return this.exform.get('email');
  }
  get telefone() {
    return this.exform.get('telefone');
  }

}
