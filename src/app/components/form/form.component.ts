import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
	userForm: FormGroup;
	userServices = inject(UsersService)
	router = inject(Router)
	activatedRoute = inject(ActivatedRoute)

	constructor() {
		this.userForm = new FormGroup({
			first_name: new FormControl(null, [
				Validators.required,
			]),
			last_name: new FormControl(null, [
				Validators.required
			]),
			email: new FormControl(null, [
				Validators.required,
				// Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
			]),
			image: new FormControl(null, [
				Validators.required
			])
		})
	}

ngOnInit() {
	this.activatedRoute.params.subscribe(async(params:any) => {
console.log(params);
if(params.id){
	const response = await this.userServices.getUserById(params.id)
	console.log("response para update",response);

			this.userForm = new FormGroup({

			_id: new FormControl(response._id),
			first_name: new FormControl(response.first_name, [
				Validators.required,
			]),
			last_name: new FormControl(response.last_name, [
				Validators.required
			]),
			email: new FormControl(response.email, [
				Validators.required,
				// Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
			]),
			image: new FormControl(response.image, [
				Validators.required
			])
		})


}

	})
}

	checkControl(formControlName: string, validador: string): boolean | undefined {
		return this.userForm.get(formControlName)?.hasError(validador) && this.userForm.get(formControlName)?.touched}


	async getDataForm() {

		if(this.userForm.value._id){

			const response = await this.userServices.updateUser(this.userForm.value)
			console.log("resultado de actualizar",response);
			if(response._id){
				alert(`el usuari@ ${response.first_name} ${response.last_name} ha sido actualizad@ con el id ${response._id}`)
				this.router.navigate(['/home'])}else{
					alert("Error al actualizar usuari@")
				}

		}else{
			const response = await this.userServices.insertUser(this.userForm.value)
			if(response.id){
				alert(`el usuari@ ${response.first_name} ${response.last_name} ha sido añadid@ con el id ${response.id}`)
				this.router.navigate(['/home'])
			}else{
				alert("Error al añadir usuari@")
			}

		}


	}
}
