import { TeamMember } from './team-member';

export class Team {
    id?: number;
    name: string;
    members: TeamMember[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addMember(member: TeamMember) {
        this.members.push(member);
    }

    removeMember(member: TeamMember) {
        this.members = this.members.filter(m => m !== member);
    }
}