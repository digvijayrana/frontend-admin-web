import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentListComponent } from './components/students/student-list.component';
import { StudentDetailsComponent } from './components/students/student-details.component';
import { AdmissionFormComponent } from './components/students/admission-form.component';
import { StudentImportComponent } from './components/students/student-import.component';
import { BranchesComponent } from './components/school/branches.component';
import { ClassesComponent } from './components/school/classes.component';
import { SectionsComponent } from './components/school/sections.component';
import { AcademicYearComponent } from './components/school/academic-year.component';
import { TeachersComponent } from './components/staff/teachers.component';
import { AdminsComponent } from './components/staff/admins.component';
import { HRRolesComponent } from './components/staff/hr-roles.component';
import { DailyComponent } from './components/attendance/daily.component';
import { MonthlyComponent } from './components/attendance/monthly.component';
import { FiltersComponent } from './components/attendance/filters.component';
import { CreateExamComponent } from './components/exams/create-exam.component';
import { MarksEntryComponent } from './components/exams/marks-entry.component';
import { ReportCardComponent } from './components/exams/report-card.component';
import { FeeHeadsComponent } from './components/fees/fee-heads.component';
import { FeeStructureComponent } from './components/fees/fee-structure.component';
import { OnlinePaymentsComponent } from './components/fees/online-payments.component';
import { InvoiceGenerationComponent } from './components/fees/invoice-generation.component';
import { PaymentHistoryComponent } from './components/fees/payment-history.component';
import { AuthGuard } from './guards/auth.guard';

// Create a wrapper component for fees dashboard
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-fees-dashboard',
  imports: [CommonModule, FeeHeadsComponent, FeeStructureComponent, OnlinePaymentsComponent, InvoiceGenerationComponent, PaymentHistoryComponent],
  template: `
    <div class="fees-dashboard">
      <div class="tabs">
        <button [class.active]="activeTab === 'heads'" (click)="activeTab = 'heads'">Fee Heads</button>
        <button [class.active]="activeTab === 'structure'" (click)="activeTab = 'structure'">Fee Structure</button>
        <button [class.active]="activeTab === 'online'" (click)="activeTab = 'online'">Online Payments</button>
        <button [class.active]="activeTab === 'invoice'" (click)="activeTab = 'invoice'">Invoice Generation</button>
        <button [class.active]="activeTab === 'history'" (click)="activeTab = 'history'">Payment History</button>
      </div>
      <div class="tab-content">
        <app-fee-heads *ngIf="activeTab === 'heads'"></app-fee-heads>
        <app-fee-structure *ngIf="activeTab === 'structure'"></app-fee-structure>
        <app-online-payments *ngIf="activeTab === 'online'"></app-online-payments>
        <app-invoice-generation *ngIf="activeTab === 'invoice'"></app-invoice-generation>
        <app-payment-history *ngIf="activeTab === 'history'"></app-payment-history>
      </div>
    </div>
    <style>
      .fees-dashboard { padding: 0 }
      .tabs { display: flex; gap: 0; border-bottom: 2px solid #e6e9f0; background: #fff }
      .tabs button { padding: 12px 16px; background: none; border: none; cursor: pointer; font-weight: 500; color: #666; transition: all 0.2s }
      .tabs button:hover { color: #007bff }
      .tabs button.active { color: #007bff; border-bottom: 3px solid #007bff; margin-bottom: -2px }
      .tab-content { padding: 12px }
    </style>
  `
})
export class FeesDashboardComponent {
  activeTab = 'heads';
}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'students', component: StudentListComponent },
      { path: 'students/new', component: AdmissionFormComponent },
      { path: 'students/import', component: StudentImportComponent },
      { path: 'students/:id', component: StudentDetailsComponent },
      {
        path: 'school-config',
        children: [
          { path: '', redirectTo: 'branches', pathMatch: 'full' },
          { path: 'branches', component: BranchesComponent },
          { path: 'classes', component: ClassesComponent },
          { path: 'sections', component: SectionsComponent },
          { path: 'academic-year', component: AcademicYearComponent }
        ]
      },
      {
        path: 'fees',
        component: FeesDashboardComponent
      },
      {
        path: 'staff',
        children: [
          { path: '', redirectTo: 'teachers', pathMatch: 'full' },
          { path: 'teachers', component: TeachersComponent },
          { path: 'admins', component: AdminsComponent },
          { path: 'hr-roles', component: HRRolesComponent }
        ]
      },
      {
        path: 'attendance',
        children: [
          { path: '', redirectTo: 'daily', pathMatch: 'full' },
          { path: 'daily', component: DailyComponent },
          { path: 'monthly', component: MonthlyComponent },
          { path: 'filters', component: FiltersComponent }
        ]
      },
      {
        path: 'exams',
        children: [
          { path: '', redirectTo: 'create', pathMatch: 'full' },
          { path: 'create', component: CreateExamComponent },
          { path: 'marks', component: MarksEntryComponent },
          { path: 'report-card', component: ReportCardComponent }
        ]
      },
      // future child routes: school-config, staff, attendance, exams, fees, transport, library, hostel, notifications
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
