import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { IUsers } from '../interfaces/iusers.interface';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	httpClient = inject(HttpClient)
	baseUrl ='https://peticiones.online/api/users'

getAllUsers( page : number) : Promise<IUsers>{

		return lastValueFrom(this.httpClient.get<IUsers>(this.baseUrl + `?page=${page}&per_page=10`))

	}

getUserById( id : string) : Promise<IUser>{

	console.log("id que pasa a servicio",id);


	return lastValueFrom(this.httpClient.get<IUser>(`https://peticiones.online/api/users/${id}`))

}

insertUser(formValue : IUser): Promise <IUser>{

	return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl, formValue))
}

updateUser(formValue : IUser): Promise <IUser>{
	return lastValueFrom(this.httpClient.put<IUser>(this.baseUrl + `/${formValue._id}`, formValue))
}

deleteUser( id: string) : Promise <IUser>{

	return lastValueFrom(this.httpClient.delete<IUser>(this.baseUrl + `/${id}`))}
}
