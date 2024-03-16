import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { Error404Component } from './pages/error404/error404.component';
import { UserComponent } from './pages/user/user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';

export const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	// { path: 'home/:page', component: HomeComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'userlist/:page', component: UserListComponent},
	{ path: 'user/:id', component: UserComponent},
	{ path: 'newuser', component: NewuserComponent},
	{ path: 'updateuser/:id', component: UpdateuserComponent},
	{ path: '**', pathMatch: "full", component: Error404Component}
];
