import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IUsers } from '../interfaces/iusers.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	httpClient = inject(HttpClient)
	baseUrl ='https://peticiones.online/api/users'

<<<<<<< HEAD
	getAllUsers() : Promise<IUsers>{
=======
	getAllPromises() : Promise<IUsers>{
>>>>>>> 1fe4481b56230107b0779db72cbe8e0dab0b1fe4
		return lastValueFrom(this.httpClient.get<IUsers>(this.baseUrl))

	}
}
