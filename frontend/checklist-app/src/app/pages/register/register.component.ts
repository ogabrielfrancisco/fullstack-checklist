import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form = this.fb.group({
    name: [''],
    email: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  submit() {
    this.auth.register(this.form.value).subscribe(() => {
      alert('Usuário cadastrado');
      this.router.navigate(['/login']);
    });
  }
}