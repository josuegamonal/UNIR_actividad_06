import { Component, Input, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { BotonesComponent } from '../../components/botones/botones.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUsers } from '../../interfaces/iusers.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [BotonesComponent, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	activatedRoute = inject(ActivatedRoute)
	usersService = inject(UsersService)

	singleUser!: IUser

	ngOnInit() : void {

		this.activatedRoute.params.subscribe(async (params: any) => {
			const id : string = params.id
			console.log("parametros", id);

			try {
			this.singleUser = await this.usersService.getUserById(id)
			console.log(id);
			console.log(this.singleUser);

			} catch (error) {
		console.error('Hubo un error al obtener el id:', error)}
			})

	}


}
