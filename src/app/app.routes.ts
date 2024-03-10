import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';

export const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{ path: 'home', component: HomeComponent},
	{path: 'newuser', component: NewuserComponent}
];
