import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-banner',
  templateUrl: './subtitle-banner.component.html',
  styleUrls: ['./subtitle-banner.component.css']
})
export class SubtitleBannerComponent {
  @Input()
  text!: string;
}
