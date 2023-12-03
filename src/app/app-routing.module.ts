import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';

const routes: Routes = [ 
  { path: 'expenses', component: ExpenseEntryListComponent }, 
  { path: 'expenses/detail/:id', component: ExpenseEntryComponent }, 
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
