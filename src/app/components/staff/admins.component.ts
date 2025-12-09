import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffService, AdminUser } from '../../services/staff.service';

@Component({
  standalone: true,
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class AdminsComponent {
  items: AdminUser[] = [];
  model: Partial<AdminUser> = {};
  adding = false;

  constructor(private staff: StaffService) {
    this.load();
  }

  load() {
    this.staff.listAdmins().subscribe((v) => (this.items = v));
  }

  add() {
    if (!this.model.name || !this.model.email) return;
    this.adding = true;
    this.staff.addAdmin({ name: this.model.name!, email: this.model.email! }).subscribe(() => {
      this.model = {};
      this.adding = false;
      this.load();
    });
  }
}

