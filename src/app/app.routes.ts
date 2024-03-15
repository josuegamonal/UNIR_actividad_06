import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { Error404Component } from './pages/error404/error404.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	// { path: 'home/:page', component: HomeComponent},
	{ path: 'home', component: HomeComponent},

	{ path: 'user/:id', component: UserComponent},
	{ path: 'newuser', component: NewuserComponent},
	{ path: '**', pathMatch: "full", component: Error404Component}
];
