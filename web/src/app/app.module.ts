import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
