import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private notificacaoService: NotificacaoService
  ) { }

  formContato = new FormGroup({
    nome: new FormControl('', [
      Validators.minLength(4), 
      Validators.required
    ]),
    assunto: new FormControl(null, [
      Validators.minLength(10), 
      Validators.required
    ]),
    telefone: new FormControl(null, [
      Validators.minLength(11),
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.email,
      Validators.required
    ]),
    mensagem: new FormControl(null, [
      Validators.minLength(20),
      Validators.required
    ])
  });

  ngOnInit(): void {
  }

  get nome() {
    return this.formContato.get('nome');
  }

  get assunto() {
    return this.formContato.get('assunto');
  }

  get telefone() {
    return this.formContato.get('telefone');
  }

  get email() {
    return this.formContato.get('email');
  }

  get mensagem() {
    return this.formContato.get('mensagem');
  }

  enviarFormulario() {
    this.notificacaoService.notificar('Formulário enviado');
    this.formContato.reset();
  }
}
