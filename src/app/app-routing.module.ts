import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DataSourceComponent } from './components/data-source/data-source.component';
import { DefaultComponent } from './components/default/default.component';
import { IconsComponent } from './components/icons/icons.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'data-source',
    component: DataSourceComponent,
  },
  {
    path: 'buttons',
    component: ButtonComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
