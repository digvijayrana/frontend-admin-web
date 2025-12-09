import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  class?: string;
  section?: string;
  dob?: string;
  admissionNumber?: string;
}

@Injectable({ providedIn: 'root' })
export class StudentService {
  private students: Student[] = [
    { id: '1', firstName: 'Aarav', lastName: 'Sharma', class: '5', section: 'A', dob: '2014-02-10', admissionNumber: 'ADM001' },
    { id: '2', firstName: 'Mira', lastName: 'Patel', class: '6', section: 'B', dob: '2013-07-19', admissionNumber: 'ADM002' },
    { id: '3', firstName: 'Rohan', lastName: 'Kumar', class: '7', section: 'A', dob: '2012-11-05', admissionNumber: 'ADM003' }
  ];

  list() {
    return of(this.students.slice());
  }

  getById(id: string) {
    const found = this.students.find(s => s.id === id) || null;
    return of(found);
  }

  add(student: Student) {
    student.id = String(Date.now());
    this.students.push(student);
    return of(student);
  }

  importFromArray(rows: Student[]) {
    // Simple import that normalizes and pushes
    rows.forEach(r => {
      r.id = String(Date.now()) + Math.random().toString(36).slice(2, 6);
      this.students.push(r);
    });
    return of({ imported: rows.length });
  }
}
