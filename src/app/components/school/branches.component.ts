import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchoolConfigService, Branch } from '../../services/school-config.service';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {
  branches: Branch[] = [];
  model: Partial<Branch> = {};
  adding = false;

  constructor(private svc: SchoolConfigService) {
    this.load();
  }

  load() { this.svc.listBranches().subscribe(b => this.branches = b); }

  add() {
    if (!this.model.name) return;
    this.adding = true;
    this.svc.addBranch(this.model).subscribe(() => { this.adding = false; this.model = {}; this.load(); });
  }
}
