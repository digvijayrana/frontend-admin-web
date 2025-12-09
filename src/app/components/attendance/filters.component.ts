import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-attendance-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class FiltersComponent {
  @Output() changed = new EventEmitter<any>();

  className = '';
  section = '';

  apply() { this.changed.emit({ className: this.className, section: this.section }); }
}
