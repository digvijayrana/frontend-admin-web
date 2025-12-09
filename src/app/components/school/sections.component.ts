import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolConfigService, SectionModel } from '../../services/school-config.service';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
  items: SectionModel[] = [];
  model: Partial<SectionModel> = {};
  adding = false;

  constructor(private svc: SchoolConfigService) { this.load(); }
  load() { this.svc.listSections().subscribe(s => this.items = s); }
  add() { if (!this.model.name) return; this.adding = true; this.svc.addSection(this.model).subscribe(() => { this.adding = false; this.model = {}; this.load(); }); }
}
