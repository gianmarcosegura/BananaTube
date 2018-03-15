import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { ComentarioComponent } from './comentario/comentario.component';
=======
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
>>>>>>> 6ce320de83d3426ffa2a06976809841cc6ba9141



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegisterComponent,
    LoginComponent,
    EditProfileComponent,
    NavbarComponent,
    FooterComponent,
<<<<<<< HEAD
    ComentarioComponent
=======
    NavbaruserComponent
>>>>>>> 6ce320de83d3426ffa2a06976809841cc6ba9141
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
