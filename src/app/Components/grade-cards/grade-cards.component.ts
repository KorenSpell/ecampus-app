import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grade-cards',
  templateUrl: './grade-cards.component.html',
  styleUrls: ['./grade-cards.component.css']
})
export class GradeCardsComponent {

  @Input()
  light!: string;
  @Input()
  dark!: string;
  @Input()
  letter!: string;
  @Input()
  quiz!: string;
  @Input()
  exam!: string;
}
