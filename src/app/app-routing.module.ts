// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularListComponent } from './components/celular-list/celular-list.component';
import { CelularCreateComponent } from './components/celular-create/celular-create.component';

const routes: Routes = [
  { path: 'celulares', component: CelularListComponent },
  { path: 'celulares/create', component: CelularCreateComponent },
  { path: '', redirectTo: '/celulares', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
