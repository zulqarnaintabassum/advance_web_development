import { Component } from '@angular/core';

interface StatusHistoryEntry {
  status: string;
  time: Date;
}

@Component({
  selector: 'app-user-status',
  standalone: false,
  templateUrl: './user-status.html',
  styleUrl: './user-status.css'
})
export class UserStatusComponent {
  isOnline: boolean = true;
  statusMessage: string = 'Online';
  lastSeen: Date = new Date();
  history: StatusHistoryEntry[] = [
    { status: 'Online', time: new Date() }
  ];

  toggleStatus(): void {
    this.isOnline = !this.isOnline;
    this.statusMessage = this.isOnline ? 'Online' : 'Offline';
    if (!this.isOnline) {
      this.lastSeen = new Date();
    }
    this.history.unshift({ status: this.statusMessage, time: new Date() });
  }
}
