import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherMainPageComponent} from './pages/teacher-main.page';


const routes: Routes = [
  {path: '', component: TeacherMainPageComponent},
  // {path: 'grades', component: GradesComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherMainPageRoutingModule {
}
