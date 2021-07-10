import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  {path: '', component:BienvenidosComponent},
  {path: 'uno', component:UnoComponent},
  {path: 'dos', component:DosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
