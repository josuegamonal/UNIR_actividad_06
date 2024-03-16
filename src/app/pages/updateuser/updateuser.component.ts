import { Component, Input } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-updateuser',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {

}
