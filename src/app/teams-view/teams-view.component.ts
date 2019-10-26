import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.scss']
})
export class TeamsViewComponent implements OnInit {

  @Input() teams: Team[] = [];

  constructor() { }

  ngOnInit() {
  }

}
