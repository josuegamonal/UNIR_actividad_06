import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/iusers.interface';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	usersService = inject(UsersService)
	arrUsers : IUser[] = []
	page: number = 1;

	async ngOnInit(){
		this.usersService.getAllUsers(this.page).then((data : any) => {
			this.arrUsers = data.results;
			console.log(this.arrUsers);
			console.log(data);



	})
}
}
