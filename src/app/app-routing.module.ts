import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { TabellaComponent } from './page/tabella/tabella.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';

const routes: Routes = [  {
  path:"1",
  component: TabellaComponent,
 
},
{
  path: "**",
  component: RegisterPageComponent,
  
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
