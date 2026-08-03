import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonInputPasswordToggle, IonButton, IonSpinner, IonNote } from "@ionic/angular/standalone";
import { AuthStore } from '../../stores/auth.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonInput, IonInputPasswordToggle, IonButton, FormsModule, IonSpinner, IonNote],
})
export class LoginComponent {
  private router = inject(Router);
  readonly userName = signal('');
  readonly password = signal('');
  readonly isLoggingIn = signal(false);
  readonly authStore = inject(AuthStore);
  readonly errorMessage = signal<string | null>(null);

  async login(){
    try{
      this.isLoggingIn.set(true);
      this.errorMessage.set(null);
      await this.authStore.login(this.userName(), this.password());

      //if login is successful, navigate to the home page
      //the catch block will handle any login errors and display an error message
      this.router.navigate(['tabs/home']);
    }catch(error){
      this.isLoggingIn.set(false);
      this.errorMessage.set(error instanceof Error ? error.message : "Login failed. Please try again.");
    }
  }

  canLogin = computed(
    () => this.userName().length > 0 && this.password().length > 0
    && !this.isLoggingIn()
  );
}
