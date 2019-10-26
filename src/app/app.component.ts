import { Component, OnInit } from '@angular/core';
import { Team } from './models/team';
import { TeamMember } from './models/team-member';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dev Team Management';
  columnWidthPercent = 45;
  teams: Team[];

  constructor() {}

  ngOnInit(): void {
    this.teams.push(new Team("Front End"));
    this.teams[0].addMember(new TeamMember("Zack"));
    this.teams[0].addMember(new TeamMember("Norman"));
    this.teams[0].addMember(new TeamMember("Shaina"));
    this.teams[0].addMember(new TeamMember("Filip"));
    this.teams.push(new Team("Back End"));
    this.teams[1].addMember(new TeamMember("Matthew"));
    this.teams[1].addMember(new TeamMember("Jacob"));
    this.teams[1].addMember(new TeamMember("Trey"));
    this.teams[1].addMember(new TeamMember("Chris"));
    this.teams[1].addMember(new TeamMember("Garrett"));
    console.log(this.teams);
  }
}
