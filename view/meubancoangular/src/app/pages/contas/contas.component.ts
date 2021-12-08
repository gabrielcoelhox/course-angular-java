import { IContas } from './../../interfaces/contas';
import { Component, OnInit } from '@angular/core';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  contas: IContas[] = [];

  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.listarTodasContas();
  }

  listarTodasContas() {
    this.contasService.listarTodasContas().subscribe(contasApi => {
      this.contas = contasApi;
    })
  }

  confirmar(id: number) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contasService.remover(id).subscribe(result => {
          Swal.fire(
            'Deletedo!',
            'Seu cliente foi removido com sucesso!',
            'success'
          )
        }, error => {
          console.log(error);
        });
      }
    })
  }
}
