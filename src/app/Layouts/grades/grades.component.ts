import { Component, OnInit } from '@angular/core';
import { grade } from 'src/app/Components/grade-cards/grade.model';
import { GradesService } from './grades.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades: grade[] = [];

  constructor(private gradesService:GradesService) {}

  ngOnInit(): void {
    this.gradesService.getLinks().subscribe((data:grade []) => {
      console.log("Fetching grades");
      for(var graded of data) {
        this.grades.push(new grade(graded));
      }
    });
  }

}
