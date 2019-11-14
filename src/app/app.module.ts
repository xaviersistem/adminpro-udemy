import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
// Rutas
import { APP_ROUTES } from "./app.routes";

// Modulos

import { PagesModule } from "./pages/pages.module";
import { RegisterComponent } from "./login/register/register.component";
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTES, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
