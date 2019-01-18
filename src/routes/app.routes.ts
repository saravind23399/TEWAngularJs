import { RouterModule, Routes } from '@angular/router';

import { USER_ROUTE } from './user.routes';

import { LandingComponent } from 'src/app/Components/landing/landing.component';
import { LoginComponent } from 'src/app/Components/login/login.component';


const APP_ROUTES: Routes = [
    {path:'user', component: LandingComponent ,children:USER_ROUTE}
];

export const routing = RouterModule.forRoot(APP_ROUTES);