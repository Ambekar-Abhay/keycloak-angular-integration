import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/Shared/auth.guard';
import { HeaderComponent } from './index/header/header.component';

const routes: Routes = [
  {path:'',component:HeaderComponent,canActivate:[AuthGuard] ,children:[{ path:'employee',loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
