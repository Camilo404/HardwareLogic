import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { MemoriasComponent } from './componentes/memorias/memorias.component';
import { MousesComponent } from './componentes/mouses/mouses.component';
import { TecladosComponent } from './componentes/teclados/teclados.component';
import { PantallasComponent } from './componentes/pantallas/pantallas.component';
import { ComputadoresComponent } from './componentes/computadores/computadores.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MemoriasComponent,
    MousesComponent,
    TecladosComponent,
    PantallasComponent,
    ComputadoresComponent,
    ServiciosComponent,
    ContactanosComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
