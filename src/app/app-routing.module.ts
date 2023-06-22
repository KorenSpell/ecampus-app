import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './Layouts/courses/courses.component';
import { GradesComponent } from './Layouts/grades/grades.component';
import { MessagesComponent } from './Layouts/messages/messages.component';
import { ToolsComponent } from './Layouts/tools/tools.component';
import { ActivityComponent } from './Layouts/activity/activity.component';
import { HomeComponent } from './Layouts/home/home.component';
import { AddMessagesComponent } from './Layouts/messages/add-messages/add-messages.component';
import { AuthComponent } from './Components/auth/auth.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AddMessagesComponent
  },
  {
    path: 'auth',
    component: AuthComponent
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
