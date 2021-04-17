import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/Shared/auth.guard';
import { HeaderComponent } from './index/header/header.component';

const routes: Routes = [
  {path:'',component:HeaderComponent,canActivate:[AuthGuard],
  children:[
  { path:'employee',canActivate:[AuthGuard],loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'human-resouces', loadChildren: () => import('./human-resources/human-resources.module').then(m => m.HumanResourcesModule) }]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
