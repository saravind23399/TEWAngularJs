import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { HOME_ROUTE } from './home.routes';
/////////////////////////////////////////////////
const APP_ROUTES: Routes = [
     {path: 'home', component: HomeComponent, children: HOME_ROUTE}
];

export const routing = RouterModule.forRoot(APP_ROUTES);