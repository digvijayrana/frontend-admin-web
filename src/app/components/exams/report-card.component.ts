import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ReportCardComponent {
  studentId = '';
  // mock generated card data
  generated: any = null;

  generate() {
    if (!this.studentId) return;
    // generate a mock report card
    this.generated = {
      student: { id: this.studentId, name: 'Sample Student' },
      grades: [ { subject: 'Math', marks: 88 }, { subject: 'English', marks: 79 } ],
      total: 167,
      max: 200
    };
  }
}
