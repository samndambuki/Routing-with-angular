import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from 'src/department-list/department-list.component';
import { EmployeeListComponent } from 'src/employee-list/employee-list.component';
import { ReactiveFormComponent } from 'src/reactive-form/reactive-form.component';
import { TemplatedrivenformComponent } from 'src/templatedrivenform/templatedrivenform.component';

const routes: Routes = [
  {path:'departments',component:DepartmentListComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'templateform',component:TemplatedrivenformComponent},
  {path:'reactiveform',component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [DepartmentListComponent,EmployeeListComponent]
