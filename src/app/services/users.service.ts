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

	getAllPromises() : Promise<IUsers>{
		return lastValueFrom(this.httpClient.get<IUsers>(this.baseUrl))

	}
}
