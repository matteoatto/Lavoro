import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UomoComponent } from './uomo/uomo.component';
import { DonnaComponent } from './donna/donna.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        children: [
          { path: '', redirectTo: 'tutto', pathMatch: 'full' },
          { path: 'tutto', component: HomeComponent },
          { path: ':category', component: HomeComponent },
        ],
      },
      {
        path: 'uomo',
        children: [
          { path: '', redirectTo: 'tutto', pathMatch: 'full' },
          { path: 'tutto', component: UomoComponent },
          { path: ':category', component: UomoComponent },
        ],
      },
      {
        path: 'donna',
        children: [
          { path: '', redirectTo: 'tutto', pathMatch: 'full' },
          { path: 'tutto', component: DonnaComponent },
          { path: ':category', component: DonnaComponent },
        ],
      },
      { path: 'carrello', component: CarrelloComponent },
      {path:'user', component: UserComponent}
      
    ],
    
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
