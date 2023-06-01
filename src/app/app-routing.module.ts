import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './Layouts/courses/courses.component';
import { GradesComponent } from './Layouts/grades/grades.component';
import { MessagesComponent } from './Layouts/messages/messages.component';
import { ToolsComponent } from './Layouts/tools/tools.component';
import { ActivityComponent } from './Layouts/activity/activity.component';
import { HomeComponent } from './Layouts/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'course',
    component: CoursesComponent
  },
  {
    path: 'grades',
    component: GradesComponent
  },
  {
    path: 'activity-stream',
    component: ActivityComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
