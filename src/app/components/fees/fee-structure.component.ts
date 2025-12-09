import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class FeeStructureComponent {
  className = '';
  structure: any[] = [ { className: 'Grade 1', items: [ { head: 'Tuition', amount: 500 } ] } ];
  adding = false;

  addClass() {
    if (!this.className) return;
    this.adding = true;
    this.structure.unshift({ className: this.className, items: [] });
    setTimeout(() => { this.className = ''; this.adding = false }, 200);
  }
}
