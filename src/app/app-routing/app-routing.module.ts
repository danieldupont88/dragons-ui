import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DragonsComponent } from 'src/app/dragons/dragons.component';
import { LoginComponent } from 'src/app/login/login.component';
import { DragonDetailComponent } from 'src/app/dragon-detail/dragon-detail.component';

const routes: Routes = [
  { path: 'dragons', component: DragonsComponent},
  { path: 'dragons/new', component: DragonDetailComponent},
  { path: 'dragon/:id', component: DragonDetailComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
