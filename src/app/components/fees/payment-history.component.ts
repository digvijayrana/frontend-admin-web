import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss'],
  imports: [CommonModule]
})
export class PaymentHistoryComponent {
  records = [
    { id: 'p1', student: 'S001', amount: 500, date: '2025-12-01', method: 'UPI' },
    { id: 'p2', student: 'S002', amount: 750, date: '2025-11-21', method: 'Card' }
  ];
}
