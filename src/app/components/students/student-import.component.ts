import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-import',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-import.component.html',
  styleUrls: ['./student-import.component.scss']
})
export class StudentImportComponent {
  fileName = '';
  message = '';

  constructor(private svc: StudentService) {}

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (!file) return;
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || '');
      const rows = this.parseCsv(text);
      this.svc.importFromArray(rows as any).subscribe(r => this.message = `Imported ${ (r as any).imported } rows`);
    };
    reader.readAsText(file);
  }

  private parseCsv(text: string) {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length);
    if (lines.length === 0) return [];
    const headers = lines[0].split(',').map(h => h.trim());
    const data = lines.slice(1).map(line => {
      const cols = line.split(',').map(c => c.trim());
      const obj: any = {};
      headers.forEach((h, i) => obj[h] = cols[i] || '');
      return {
        firstName: obj.firstName || obj.first_name || obj.firstname || '',
        lastName: obj.lastName || obj.last_name || obj.lastname || '',
        class: obj.class || obj.grade || '',
        section: obj.section || '',
        dob: obj.dob || '',
        admissionNumber: obj.admissionNumber || obj.adm || obj.admission_no || ''
      };
    });
    return data;
  }
}
