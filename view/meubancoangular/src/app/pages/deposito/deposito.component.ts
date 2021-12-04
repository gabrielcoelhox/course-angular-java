import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  formGroup: FormGroup = new FormGroup({
    'agencia' : new FormControl('', Validators.required),
    'numeroConta' : new FormControl('', Validators.required),
    'valor' : new FormControl('', Validators.required)
  });

  depositar() {
    const deposito: ISaqueDeposito = this.formGroup.value;
    this.contasService.deposito(deposito).subscribe(clienteAPI => {
      Swal.fire('FUNFOU!');
      this.router.navigate(['/deposito']);
  }, error => {
    console.log(error);
  });
  }
}
