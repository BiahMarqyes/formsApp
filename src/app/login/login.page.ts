import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  mensagens = {
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
  };

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formLogin = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
   }

  ngOnInit() {
  }

  async salvarLogin() {
    if(this.formLogin.valid){
      this.route.navigateByUrl('/produtos');
    }else{
      alert('Formulário Inválido!');
    }
  }

}
