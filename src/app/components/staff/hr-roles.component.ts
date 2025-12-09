import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffService, HRRole } from '../../services/staff.service';

@Component({
  standalone: true,
  selector: 'app-hr-roles',
  templateUrl: './hr-roles.component.html',
  styleUrls: ['./hr-roles.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class HRRolesComponent {
  items: HRRole[] = [];
  model: Partial<HRRole> = {};
  adding = false;

  constructor(private staff: StaffService) {
    this.load();
  }

  load() {
    this.staff.listHRRoles().subscribe((v) => (this.items = v));
  }

  add() {
    if (!this.model.name) return;
    this.adding = true;
    this.staff.addHRRole({ name: this.model.name!, description: this.model.description || '' }).subscribe(() => {
      this.model = {};
      this.adding = false;
      this.load();
    });
  }
}

