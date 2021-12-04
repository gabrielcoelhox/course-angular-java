import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

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

  sacar() {
    const saque: ISaqueDeposito = this.formGroup.value;
    this.contasService.saque(saque).subscribe(clienteAPI => {
      Swal.fire('FUNFOU!');
      this.router.navigate(['/saque']);
  }, error => {
    console.log(error);
  });
  }
}
