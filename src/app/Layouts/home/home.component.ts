import { Component, OnInit } from '@angular/core';
import { link } from 'src/app/Components/link-cards/link.model';
import { LinksService } from './links.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links:link[] = [];

  constructor(private linksService:LinksService) {}

  ngOnInit(): void {
    this.linksService.getLinks().subscribe((data:link []) => {
      console.log("Fetching links");
      for(var linked of data) {
        this.links.push(new link(linked));
      }
    });
  }
}
