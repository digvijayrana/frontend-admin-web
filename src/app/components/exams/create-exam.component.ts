import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-exam-create',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CreateExamComponent {
  model: any = { name: '', className: '', date: new Date().toISOString().slice(0,10), totalMarks: 100 };
  creating = false;
  exams: any[] = [];

  create() {
    if (!this.model.name || !this.model.className) return;
    this.creating = true;
    const exam = { ...this.model, id: 'ex' + Date.now() };
    this.exams.unshift(exam);
    setTimeout(() => { this.creating = false; this.model = { name: '', className: '', date: new Date().toISOString().slice(0,10), totalMarks: 100 } }, 300);
  }
}
