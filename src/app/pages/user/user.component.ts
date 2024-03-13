import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/iusers.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	usersService = inject(UsersService)
	arrUsers : IUsers[] = []

	ngOnInit(){
	}

}
