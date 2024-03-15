import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/iusers.interface';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	usersService = inject(UsersService)
	arrUsers : IUser[] = []
	totalPages!: number;
	page:number = 1;

	async ngOnInit() {
		try {
			const data: IUsers = await this.usersService.getAllUsers(this.page);
			this.arrUsers = data.results;
			this.totalPages = data.total_pages;
			console.log(this.arrUsers);
			console.log(data);
			console.log(this.totalPages);
		} catch (error) {
			console.error('Hubo un error al obtener los usuarios:', error);
		}
	}}
