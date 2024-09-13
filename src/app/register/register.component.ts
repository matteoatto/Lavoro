import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any;
  formType = 'password';
  isHidden = false;
  user: any;

  constructor(public storageService: StorageService, private router:Router  ) {}

  ngOnInit() {
    this.user = {
      nome: '',
      cognome: '',
      dataNascita: '',
      indirizzo: '',
      email: '',
      password: '',
    };
  }

  onSubmit() {
    this.storageService.setLocalStorage('profile', this.user);
    Swal.fire({
      icon: 'success',
      title: 'Registrazione Effettuata',
      showConfirmButton: false,
      timer: 1500,
    });
    this.router.navigate(['/login'])
  }

  togglePasswordVisibility() {
    if (this.formType === 'password') {
      this.formType = 'text';
      this.isHidden = true;
    } else {
      this.formType = 'password';
      this.isHidden = false;
    }
  }



  
}
