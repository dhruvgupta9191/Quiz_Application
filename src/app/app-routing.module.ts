import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './teacher/create/create.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch:'full' },
  {path:'home',component: HomeComponent},
   {path:'student',redirectTo: 'student'},
   {path:'student',component: StudentComponent,children:[
    {path:'0',component:PlayQuizComponent}
   ]},
   {path:'create', component:CreateComponent},
   {path:'student/:id',component: PlayQuizComponent},
  {path: 'teacher', component: TeacherComponent/*  children:[
    {path:'create',component:CreateComponent}
  ] */
}, 

  
  /* {path:'**', redirectTo:''} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

