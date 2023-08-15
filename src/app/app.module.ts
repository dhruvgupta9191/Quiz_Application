import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './teacher/create/create.component';
import { FormsModule } from '@angular/forms';
import { QuizService } from './quiz.service';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    HomeComponent,
    CreateComponent,
    PlayQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
