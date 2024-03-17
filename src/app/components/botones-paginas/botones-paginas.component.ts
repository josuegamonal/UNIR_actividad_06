import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUsers } from '../../interfaces/iusers.interface';
import { UsersService } from '../../services/users.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-botones-paginas',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './botones-paginas.component.html',
  styleUrl: './botones-paginas.component.css'
})
export class BotonesPaginasComponent {
	usersService = inject(UsersService)
	users! : IUsers
	totalPages!: number;
	page! :number

	async ngOnInit() {
		try {
			const data: IUsers = await this.usersService.getAllUsers(this.page);
			this.users = data;
			this.totalPages = data.total_pages;
		} catch (error) {
			console.error('Hubo un error al obtener los usuarios:', error);
		}
	}
}
