import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/iusers.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	usersService = inject(UsersService)
	arrUsers : IUsers[] = []

	}



