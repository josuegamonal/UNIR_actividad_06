
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RouterLink } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, RouterLink, UserListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {
	  this.router.navigate(['/userlist', 1]);
	}

  }
