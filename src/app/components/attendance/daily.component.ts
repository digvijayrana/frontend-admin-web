import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-attendance-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class DailyComponent {
  date: string = new Date().toISOString().slice(0, 10);
  filter: string = '';

  // mock data for demo
  rows = [
    { roll: 'S001', name: 'Anita Sharma', status: 'Present' },
    { roll: 'S002', name: 'Rahul Verma', status: 'Absent' },
    { roll: 'S003', name: 'Maya Iyer', status: 'Present' }
  ];

  filtered() {
    const f = this.filter.trim().toLowerCase();
    if (!f) return this.rows;
    return this.rows.filter(r => r.name.toLowerCase().includes(f) || r.roll.toLowerCase().includes(f));
  }

  get totalPresent() { return this.rows.filter(r => r.status === 'Present').length }
  get totalAbsent() { return this.rows.filter(r => r.status === 'Absent').length }
  get attendancePercent() { const t = this.rows.length; return t ? Math.round((this.totalPresent / t) * 100) : 0 }
}
