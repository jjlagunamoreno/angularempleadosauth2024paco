import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceEmpleados } from './services/service.empleados';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [provideHttpClient(), ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
