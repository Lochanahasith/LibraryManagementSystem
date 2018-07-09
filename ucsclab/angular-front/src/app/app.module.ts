import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes} from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './components/profile/profile.component';
import { LabListComponent } from './components/lab-list/lab-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ResvlistComponent } from './components/resvlist/resvlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddlabComponent } from './components/addlab/addlab.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminResvComponent } from './components/admin-resv/admin-resv.component';
import { AdminLabsComponent } from './components/admin-labs/admin-labs.component';



const applicationRoutes:Routes = [
  
   {path:'',component: DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'labs',component:LabListComponent},
  {path:'reservation/:lab',component:ReservationComponent},
  //{path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'reservationsList',component:ResvlistComponent},
  {path:'addLab',component:AddlabComponent},
  {path:'adminResv',component:AdminResvComponent},
  {path:'adminLabs',component:AdminLabsComponent}

  
  
  
  

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LabListComponent,
    ReservationComponent,
    ResvlistComponent,
    DashboardComponent,
    AddlabComponent,
    FilterPipe,
    AdminResvComponent,
    AdminLabsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
