import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../../guards/auth.guard';
import { AdminComponent } from './../admin.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { ProfileComponent } from './../../auth/profile/profile.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          { path: 'dashboard1', component: AdminDashboard1Component },
          { path: 'dashboard2', component: AdminDashboard2Component },
          { path: 'profile', component: ProfileComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
