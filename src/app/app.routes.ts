import { Routes } from '@angular/router';
import { BusDashboardComponent } from './bus-dashboard/bus-dashboard.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'planner', component: BusDashboardComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown paths to the landing page
];
