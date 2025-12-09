import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolConfigService, ClassModel } from '../../services/school-config.service';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  items: ClassModel[] = [];
  model: Partial<ClassModel> = {};
  adding = false;

  constructor(private svc: SchoolConfigService) { this.load(); }
  load() { this.svc.listClasses().subscribe(c => this.items = c); }
  add() { if (!this.model.name) return; this.adding = true; this.svc.addClass(this.model).subscribe(() => { this.adding = false; this.model = {}; this.load(); }); }
}
