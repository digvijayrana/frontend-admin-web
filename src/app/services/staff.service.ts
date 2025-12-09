import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Teacher { id: string; name: string; subject: string }
export interface AdminUser { id: string; name: string; email: string }
export interface HRRole { id: string; name: string; description?: string }

@Injectable({ providedIn: 'root' })
export class StaffService {
  private teachers: Teacher[] = [ { id: 't1', name: 'Alice Johnson', subject: 'Math' } ];
  private admins: AdminUser[] = [ { id: 'a1', name: 'Super Admin', email: 'admin@example.com' } ];
  private hrRoles: HRRole[] = [ { id: 'h1', name: 'Recruiter', description: 'Handles hiring' } ];

  listTeachers(): Observable<Teacher[]> { return of(this.teachers.slice()) }
  addTeacher(t: Omit<Teacher,'id'>): Observable<void> { this.teachers.push({ id: 't' + (this.teachers.length+1), ...t }); return of(void 0) }

  listAdmins(): Observable<AdminUser[]> { return of(this.admins.slice()) }
  addAdmin(a: Omit<AdminUser,'id'>): Observable<void> { this.admins.push({ id: 'a' + (this.admins.length+1), ...a }); return of(void 0) }

  listHRRoles(): Observable<HRRole[]> { return of(this.hrRoles.slice()) }
  addHRRole(r: Omit<HRRole,'id'>): Observable<void> { this.hrRoles.push({ id: 'h' + (this.hrRoles.length+1), ...r }); return of(void 0) }
}

