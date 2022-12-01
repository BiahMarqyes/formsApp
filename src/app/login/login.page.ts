import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formLogin: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formLogin = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    });
   }

  ngOnInit() {
  }

}
