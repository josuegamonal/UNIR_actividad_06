import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{ path: 'home', component: HomeComponent},
	{ path: 'newuser', component: NewuserComponent},
	{ path: '**', pathMatch: "full", component: Error404Component}
];
