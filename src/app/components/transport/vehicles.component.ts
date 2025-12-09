import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class VehiclesComponent {
  model = { regNo: '', type: '', capacity: 0, driver: '' };
  vehicles: any[] = [ { id: 'v1', regNo: 'KA-01-AB-1234', type: 'Bus', capacity: 50, driver: 'Rajesh' } ];
  adding = false;

  add() {
    if (!this.model.regNo) return;
    this.adding = true;
    this.vehicles.unshift({ id: 'v' + Date.now(), ...this.model });
    setTimeout(() => { this.model = { regNo: '', type: '', capacity: 0, driver: '' }; this.adding = false }, 200);
  }
}
