import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
	@Input() parent: string = ""
	@Input() idUser: string | undefined = ""
	@Input() id: string | undefined = ""
	userSevice = inject(UsersService)
	router = inject(Router)

	async deleteUser(id : string | undefined){
		if (id !== undefined){
			let confirmar = confirm("¿Seguro que quieres borrar al usuri@ " + this.idUser + "?")
			if(confirmar){
				let response = await this.userSevice.deleteUser(id)
				if (response._id){
					alert("Usuari@ borrado")
					this.router.navigate(['/home'])
			}
		}

		}
	}

}
