import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../Components/landing/landing.component';
import { LoginComponent } from '../Components/login/login.component';


const APP_ROUTES: Routes = [
    {path:'', component: LandingComponent},
    {path:'login',component: LoginComponent}
    // {path: 'admin', component: AdminComponent, children: ADMIN_ROUTE, canActivate: [AuthGuard,AdminGuard]},
    // {path: 'user',component:UserComponent,children:USER_ROUTE},
];

export const routing = RouterModule.forRoot(APP_ROUTES);