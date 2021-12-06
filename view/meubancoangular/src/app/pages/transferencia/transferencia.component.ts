import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  formGroup: FormGroup = new FormGroup({
    'agenciaDestino' : new FormControl('', Validators.required),
    'agenciaOrigem' : new FormControl('', Validators.required),
    'numeroContaDestino' : new FormControl('', Validators.required),
    'numeroContaOrigem' : new FormControl('', Validators.required),
    'valor' : new FormControl('', Validators.required)
  });

  transferir() {
    const transferir: ITransferencia = this.formGroup.value;
    this.contasService.transferencia(transferir).subscribe(clienteAPI => {
      Swal.fire('FUNFOU!');
      this.router.navigate(['/transferencia']);
  }, error => {
    console.log(error);
  });
  }
}

