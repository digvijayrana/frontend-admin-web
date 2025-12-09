import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolConfigService, AcademicYear } from '../../services/school-config.service';

@Component({
  selector: 'app-academic-year',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.scss']
})
export class AcademicYearComponent {
  items: AcademicYear[] = [];
  model: Partial<AcademicYear> = {};
  adding = false;

  constructor(private svc: SchoolConfigService) { this.load(); }
  load() { this.svc.listYears().subscribe(y => this.items = y); }
  add() { if (!this.model.name) return; this.adding = true; this.svc.addYear(this.model).subscribe(() => { this.adding = false; this.model = {}; this.load(); }); }
}
