import { Component, OnInit } from '@angular/core';
import {CommonModule, DatePipe, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: [DatePipe]
})
export class LandingComponent implements OnInit {
  currentDate: Date = new Date();
  formattedDate: string = '';
  greeting: string = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.updateDateTime();
    this.setGreeting();
  }

  private updateDateTime() {
    this.formattedDate = this.datePipe.transform(this.currentDate, 'fullDate', '', 'es-ES') || '';
  }

  private setGreeting() {
    const hour = this.currentDate.getHours();
    if (hour < 12) {
      this.greeting = '¡Buenos días!';
    } else if (hour < 20) {
      this.greeting = '¡Buenas tardes!';
    } else {
      this.greeting = '¡Buenas noches!';
    }
  }
}
