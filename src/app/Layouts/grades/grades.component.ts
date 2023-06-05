import { Component } from '@angular/core';
import { grade } from 'src/app/Components/grade-cards/grade.model';
import { mock_grades } from 'src/app/Components/grade-cards/mock-grades';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {

  grades: grade[] = [];

  constructor() {
    for(var graded of mock_grades){
      this.grades.push(new grade(graded));
    }
  }

}
