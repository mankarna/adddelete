import {TokenComponent} from './token/token.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CreateTokenComponent } from './create-token/create-token.component';
 
const routes: Routes = [
  {path: '', redirectTo: 'token', pathMatch: 'full'},
  {path: 'token', component: TokenComponent},
  {path: 'posttoken', component: CreateTokenComponent},
  ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}
