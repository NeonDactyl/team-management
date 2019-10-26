import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TeamService {
    teams: Team[] = [];
}