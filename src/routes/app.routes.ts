import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from 'src/app/Components/landing/landing.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { ChangepasswordComponent } from 'src/app/Components/changepassword/changepassword.component';

const APP_ROUTES: Routes = [
    //{path:'user', component: LandingComponent ,children:USER_ROUTE}
    {path:'', component: LandingComponent},
    {path:'login', component: LoginComponent},
    {path:'changePassword', component: ChangepasswordComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);