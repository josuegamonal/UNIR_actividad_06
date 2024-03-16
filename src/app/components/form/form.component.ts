import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
	tipo: string = "Nuevo";
	userForm: FormGroup;

	constructor() {
		this.userForm = new FormGroup({
			name: new FormControl('', []),
			surname: new FormControl('', []),
			email: new FormControl('', []),
			image: new FormControl('', [])
		}, [])
	}

	getDataForm() {
		console.log(this.userForm.value);

	}
}
