import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  student: Student | null = null;

  constructor(private route: ActivatedRoute, private svc: StudentService) {
    const id = this.route.snapshot.paramMap.get('id') || '';
    if (id) {
      this.svc.getById(id).subscribe(s => this.student = s);
    }
  }
}
