import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-fee-heads',
  templateUrl: './fee-heads.component.html',
  styleUrls: ['./fee-heads.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class FeeHeadsComponent {
  model = { name: '', code: '', description: '' };
  heads: any[] = [ { id: 'h1', name: 'Tuition Fee', code: 'TU', description: 'Monthly tuition' } ];
  adding = false;

  add() {
    if (!this.model.name) return;
    this.adding = true;
    this.heads.unshift({ id: 'h' + Date.now(), ...this.model });
    setTimeout(() => { this.model = { name: '', code: '', description: '' }; this.adding = false }, 200);
  }
}
