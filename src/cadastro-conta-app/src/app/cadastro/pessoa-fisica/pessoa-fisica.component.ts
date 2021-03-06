import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'cc-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent implements OnInit {

  cadastroForm: FormGroup;
  loading: boolean = false;

  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      cpf: ['',
        [
          Validators.required,
          Validators.pattern('[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}')
        ]
      ],
      nome: ['',
        [
          Validators.required
        ]
      ],
      estadoCivil: ['',
        [
          Validators.required
        ]
      ],
      dataNascimento: ['',
        [
          Validators.required
        ]
      ],
      telefone: ['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      cep: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ]
      ],
      pais: ['',
        [
          Validators.required
        ]
      ],
      estado: ['',
        [
          Validators.required
        ]
      ],
      cidade: ['',
        [
          Validators.required
        ]
      ],
      bairro: ['',
        [
          Validators.required
        ]
      ],
      numero: ['',
        [
          Validators.required
        ]
      ],
      complemento: ['',
        []
      ],
      renda: ['',
        [
          Validators.required
        ]
      ],
      tipo: 'PF'
    });
  }

  submit() {
    this.loading = true;

    const newCadastro = this.cadastroForm.getRawValue() as Cliente;
    console.log(newCadastro);
    this.cadastroService
      .inserirCliente(newCadastro)
      .subscribe(
        () => { this.loading = false; this.router.navigate(['sucesso']) },
        err => { this.loading = false; this.router.navigate(['erro']) }
      );
  }

}
