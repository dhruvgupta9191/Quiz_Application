import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{
  quizez:any=[]
  constructor( private quizService:QuizService){
    this.quizez=quizService.getquizarray();
    console.log(this.quizez);
    /* console.log(this.quizez[0])
    console.log(this.quizez[0][0]) */
  }
  ngOnInit(): void {
    
  }  

}
