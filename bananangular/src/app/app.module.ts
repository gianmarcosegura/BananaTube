import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LogeService } from './loge.service';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { FooterComponent } from './footer/footer.component';
import { ComentarioComponent } from './comentario/comentario.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegisterComponent,
    LoginComponent,
    EditProfileComponent,
    NavbarComponent,
    FooterComponent,
    ComentarioComponent,
    NavbaruserComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [LogeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
