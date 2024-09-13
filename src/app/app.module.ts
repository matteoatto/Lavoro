import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UomoComponent } from './uomo/uomo.component';
import { CommonModule } from '@angular/common';
import { DonnaComponent } from './donna/donna.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { CurrencyPipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScarpeComponent } from './scarpe/scarpe.component';
import { TshirtComponent } from './t-shirt/t-shirt.component';
import { PantalonciniComponent } from './pantaloncini/pantaloncini.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    UomoComponent,
    DonnaComponent,
    CarrelloComponent,
    ScarpeComponent,
    TshirtComponent,
    PantalonciniComponent,
    RegisterComponent,
    UserComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CurrencyPipe,
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideClientHydration(), ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
