import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-attendance-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class MonthlyComponent {
  month: string = new Date().toISOString().slice(0,7); // yyyy-mm

  summary = [
    { class: 'Grade 1', present: 25, absent: 5 },
    { class: 'Grade 2', present: 22, absent: 8 }
  ];

  percent(s: { present: number; absent: number }) { const t = s.present + s.absent; return t ? Math.round((s.present / t) * 100) : 0 }
}
