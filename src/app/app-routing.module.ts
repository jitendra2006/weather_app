import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path:'',component:CurrentComponent},
  {path:'current',component:CurrentComponent},
  {path:'forecast',component:ForecastComponent},
  {path:'setting',component:SettingComponent}
  // {path:'addcity',}
  // {path:'removecity',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
