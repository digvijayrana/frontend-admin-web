import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-marks-entry',
  templateUrl: './marks-entry.component.html',
  styleUrls: ['./marks-entry.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class MarksEntryComponent {
  examId: string | null = null;
  // mock students for demo
  students = [
    { roll: 'S001', name: 'Anita Sharma', marks: null },
    { roll: 'S002', name: 'Rahul Verma', marks: null },
    { roll: 'S003', name: 'Maya Iyer', marks: null }
  ];

  save() {
    // in a real app, POST marks to API. Here we just log and show a simple alert.
    console.log('Saving marks', this.students);
    alert('Marks saved for ' + (this.examId || 'selected exam'));
  }
}
