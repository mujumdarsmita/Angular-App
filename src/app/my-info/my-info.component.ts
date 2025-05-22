import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-info',
  imports: [CommonModule],
  templateUrl: './my-info.component.html',
  styleUrl: './my-info.component.css'
})
export class MyInfoComponent {
bioVisible = true;

  bio = "Hello! I'm Smita Mujumdar, a software developer passionate about Angular and .Net technologies.";

  skills: string[] = ['Angular', 'TypeScript', '.NET Core', 'C#', 'SQL Server'];

  toggleBio(): void {
    this.bioVisible = !this.bioVisible;
  }
}
