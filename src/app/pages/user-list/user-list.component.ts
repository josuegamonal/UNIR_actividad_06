import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/iusers.interface';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BotonesPaginasComponent } from '../../components/botones-paginas/botones-paginas.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, RouterLink, BotonesPaginasComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
	usersService = inject(UsersService)
	activatedRoute = inject(ActivatedRoute)

	arrUsers : IUser[] = []
	totalPages!: number;
	page:number = 1;

	async ngOnInit() {
		try {
		  this.activatedRoute.params.subscribe(async (params: any) => {
			this.page = Number(params.page);
			console.log("parametros en user list", this.page);
			console.log(this.page, typeof this.page);

			const data: IUsers = await this.usersService.getAllUsers(this.page);
			this.arrUsers = data.results;
			this.totalPages = data.total_pages;
			console.log(this.arrUsers);
			console.log(data);
			console.log(this.totalPages);
		  });
		} catch (error) {
		  console.error('Hubo un error al obtener los usuarios:', error);
		}
	  }
	}
