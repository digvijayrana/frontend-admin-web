import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-online-payments',
  templateUrl: './online-payments.component.html',
  styleUrls: ['./online-payments.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class OnlinePaymentsComponent {
  payment = { studentId: '', amount: 0, method: 'Card' };
  submitting = false;

  pay() {
    if (!this.payment.studentId || !this.payment.amount) return;
    this.submitting = true;
    setTimeout(() => { this.submitting = false; alert('Payment processed (mock)'); this.payment = { studentId: '', amount: 0, method: 'Card' } }, 500);
  }
}
