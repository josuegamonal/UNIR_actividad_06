import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
<<<<<<< HEAD
import { IUsers } from '../../interfaces/iusers.interface';
=======
import { IUser } from '../../interfaces/iuser.interface';
>>>>>>> 1fe4481b56230107b0779db72cbe8e0dab0b1fe4

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	usersService = inject(UsersService)
<<<<<<< HEAD
	arrUsers : IUsers[] = []

	ngOnInit(){
	}
=======
	arrUsers : IUser[] = []
>>>>>>> 1fe4481b56230107b0779db72cbe8e0dab0b1fe4

}
