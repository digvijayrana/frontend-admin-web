import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-admission-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent {
  model: Partial<Student> = {};
  saving = false;

  constructor(private svc: StudentService, private router: Router) {}

  submit() {
    this.saving = true;
    const toAdd: Student = {
      id: '',
      firstName: this.model.firstName || '',
      lastName: this.model.lastName || '',
      class: this.model.class,
      section: this.model.section,
      dob: this.model.dob,
      admissionNumber: this.model.admissionNumber || ''
    };
    this.svc.add(toAdd).subscribe(() => {
      this.saving = false;
      this.router.navigateByUrl('/students');
    });
  }
}
