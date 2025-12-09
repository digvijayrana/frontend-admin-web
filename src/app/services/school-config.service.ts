import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Branch {
  id: string;
  name: string;
  address?: string;
}

export interface ClassModel {
  id: string;
  name: string; // e.g., '1', '2', 'Nursery'
}

export interface SectionModel {
  id: string;
  name: string; // e.g., 'A', 'B'
}

export interface AcademicYear {
  id: string;
  name: string; // e.g., '2025-2026'
  startDate?: string;
  endDate?: string;
}

@Injectable({ providedIn: 'root' })
export class SchoolConfigService {
  private branches: Branch[] = [
    { id: 'b1', name: 'Main Campus', address: '123 Vidhya St' },
    { id: 'b2', name: 'East Campus', address: '45 East Rd' }
  ];

  private classes: ClassModel[] = [
    { id: 'c1', name: 'Nursery' },
    { id: 'c2', name: '1' },
    { id: 'c3', name: '2' }
  ];

  private sections: SectionModel[] = [
    { id: 's1', name: 'A' },
    { id: 's2', name: 'B' }
  ];

  private years: AcademicYear[] = [
    { id: 'y1', name: '2024-2025', startDate: '2024-04-01', endDate: '2025-03-31' },
    { id: 'y2', name: '2025-2026', startDate: '2025-04-01', endDate: '2026-03-31' }
  ];

  // Branches
  listBranches() { return of(this.branches.slice()); }
  addBranch(b: Partial<Branch>) {
    const id = 'b' + Date.now();
    const nb: Branch = { id, name: b.name || 'New Branch', address: b.address };
    this.branches.push(nb);
    return of(nb);
  }

  // Classes
  listClasses() { return of(this.classes.slice()); }
  addClass(c: Partial<ClassModel>) {
    const id = 'c' + Date.now();
    const nc: ClassModel = { id, name: c.name || 'New Class' };
    this.classes.push(nc);
    return of(nc);
  }

  // Sections
  listSections() { return of(this.sections.slice()); }
  addSection(s: Partial<SectionModel>) {
    const id = 's' + Date.now();
    const ns: SectionModel = { id, name: s.name || 'New Section' };
    this.sections.push(ns);
    return of(ns);
  }

  // Academic Years
  listYears() { return of(this.years.slice()); }
  addYear(y: Partial<AcademicYear>) {
    const id = 'y' + Date.now();
    const ny: AcademicYear = { id, name: y.name || 'New Year', startDate: y.startDate, endDate: y.endDate };
    this.years.push(ny);
    return of(ny);
  }
}
