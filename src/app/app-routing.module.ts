import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardComponent } from './pages/list-card/list-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ListCardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
