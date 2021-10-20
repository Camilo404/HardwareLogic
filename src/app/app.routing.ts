//Importar los modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Route } from '@angular/router';

//Importar componentes para pagina exclusiva
import { HomeComponent } from './componentes/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component'; 
import { MemoriasComponent } from './componentes/memorias/memorias.component';
import { MousesComponent } from './componentes/mouses/mouses.component';
import { TecladosComponent } from './componentes/teclados/teclados.component';
import { PantallasComponent } from './componentes/pantallas/pantallas.component';
import { ComputadoresComponent } from './componentes/computadores/computadores.component';
import { ErrorComponent } from './componentes/error/error.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'memorias', component: MemoriasComponent},
    {path: 'mouses', component: MousesComponent},
    {path: 'teclados', component: TecladosComponent},
    {path: 'pantallas', component: PantallasComponent},
    {path: 'computadores', component: ComputadoresComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contactanos', component: ContactanosComponent},
    {path: '***', component: ErrorComponent}
];

//Exportar modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);