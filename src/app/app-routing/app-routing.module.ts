import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DragonsComponent } from 'src/app/dragons/dragons.component';
import { LoginComponent } from 'src/app/login/login.component';
import { DragonDetailComponent } from 'src/app/dragon-detail/dragon-detail.component';
import { AuthGuardService } from 'src/app/auth-guard.service';

const routes: Routes = [
  { path: 'dragons', component: DragonsComponent, canActivate: [AuthGuardService] },
  { path: 'dragons/new', component: DragonDetailComponent, canActivate: [AuthGuardService]},
  { path: 'dragon/:id', component: DragonDetailComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
