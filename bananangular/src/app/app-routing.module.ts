import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'

const routes: Routes = [
  {path:"",
   component:InicioComponent},
{path:"register",
   component:RegisterComponent},
{path:"login",
   component:LoginComponent},
{path:"editprofile",
   component:EditProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
