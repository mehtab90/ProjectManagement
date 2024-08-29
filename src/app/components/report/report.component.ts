import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  reportData: any;

  constructor(private fb: FormBuilder, private reportService: ReportService) {
    this.reportForm = this.fb.group({
      projectId: [''],
      translator: ['']
    });
  }

  ngOnInit(): void {}

  generateReport(): void {
    const filters = this.reportForm.value;
    this.reportService.generateReport(filters).subscribe(data => {
      this.reportData = data;
    });
  }
}
