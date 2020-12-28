// importar los modulos de router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';

// Array de configuracion de las rutas
const appRoutes : Routes = [
    { path: '', component : Pagina1Component},
    { path: 'home', component : Pagina1Component},
    { path: 'pagina2/:nombre/:apellidos/:seguidores', component : Pagina2Component},
    { path: 'pagina2/:nombre/:apellidos', component : Pagina2Component},
    { path: 'pagina2/:nombre', component : Pagina2Component},
    { path: 'pagina2', component : Pagina2Component},
    { path: 'pagina3', component : Pagina3Component},
    { path: '**', component : Pagina1Component}
]

// exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

