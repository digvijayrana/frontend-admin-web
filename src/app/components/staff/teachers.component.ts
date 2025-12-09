import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffService, Teacher } from '../../services/staff.service';

@Component({
  standalone: true,
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class TeachersComponent {
  items: Teacher[] = [];
  model: Partial<Teacher> = {};
  adding = false;

  constructor(private staff: StaffService) {
    this.load();
  }

  load() {
    this.staff.listTeachers().subscribe((v) => (this.items = v));
  }

  add() {
    if (!this.model.name) return;
    this.adding = true;
    this.staff.addTeacher({ name: this.model.name!, subject: this.model.subject || '' }).subscribe(() => {
      this.model = {};
      this.adding = false;
      this.load();
    });
  }
}

