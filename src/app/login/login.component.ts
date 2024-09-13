import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ConfigService } from '../config.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: any;
  formType = 'password';
  isHidden = false;

  constructor(private router: Router, configService:ConfigService, public storageService: StorageService  ) {}

  ngOnInit(): void {
    this.user = {
      email: "",
      password: ""
    };
  }

  onSubmit() {
    const user  = this.storageService.getLocalStorage('profile');
    if(user){
      if (
        this.user.email === user.email &&
        this.user.password === user.password
      ) {
        
        this.router.navigate(['/dashboard/home/tutto']);
        Swal.fire({
          icon: "success",
          title: "Login Effettuato",
          showConfirmButton: false,
          timer: 1500,
          showCloseButton: true
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Credenziali non corrette!",
          showConfirmButton: false,
          timer: 1500
        });
      }
  
    }
  }

  showCredentials() {
    if (this.formType === 'password') {
      this.formType = 'text';
      this.isHidden = true;
    } else {
      this.formType = 'password';
      this.isHidden = false;
    }

    
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
