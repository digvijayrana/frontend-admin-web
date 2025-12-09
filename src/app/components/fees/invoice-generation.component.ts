import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-invoice-generation',
  templateUrl: './invoice-generation.component.html',
  styleUrls: ['./invoice-generation.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class InvoiceGenerationComponent {
  studentId = '';
  invoices: any[] = [];

  generate() {
    if (!this.studentId) return;
    const inv = { id: 'inv' + Date.now(), studentId: this.studentId, amount: Math.floor(Math.random()*1000)+500, date: new Date().toISOString().slice(0,10) };
    this.invoices.unshift(inv);
  }
}
