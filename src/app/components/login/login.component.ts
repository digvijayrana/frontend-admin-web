import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService, Credentials } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: Credentials = { username: '', password: '' };
  loading = false;
  error: string | null = null;
  private returnUrl = '/';

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    const q = this.route.snapshot.queryParamMap.get('returnUrl');
    console.log('Return URL:', q);
    if (q) this.returnUrl = q;
  }

  submit() {
    this.error = null;
    this.loading = true;
    this.auth.login(this.credentials).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl(this.returnUrl || '/');
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Login failed';
      }
    });
  }
}
