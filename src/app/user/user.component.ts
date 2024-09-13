import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(public storageService: StorageService  ) {}

  user:any;

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.user =  this.storageService.getLocalStorage('profile');
    if (this.user.dataNascita) {
      this.user.dataNascita = new Date(this.user.dataNascita).toISOString().split('T')[0];
    }
    return this.user;

  }


  onSubmit() {


    this.storageService.setLocalStorage('profile', this.user);

    Swal.fire({
      icon: 'success',
      title: 'Modifica Effettuata',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}