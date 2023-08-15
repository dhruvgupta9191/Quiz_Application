import { ContentObserver } from '@angular/cdk/observers';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  num:any;
  question:string | undefined;
  ques:string='';
  option:string[]=[];
  nam:any=''
  correctopt:any;
  ans:any;
  correct:any;
 
  @ViewChild('f') questionForm:NgForm | undefined;
  @ViewChild('quizname') quizname!: ElementRef;
  grade: any;

  constructor( private quizService:QuizService,private router:Router, private route:ActivatedRoute){
  }

  ngOnInit(){
    this.num=0;
  }
  onNext(){
    
    this.ques=this.questionForm?.value.quest;
    this.correctopt=this.questionForm?.value.correctopt
    this.grade=this.questionForm?.value.grade
    /* this.correct=this.questionForm?.value.correct */
    /* this.option=[this.questionForm?.value.ans,{'correctopt':this.correctopt}] */
    ;
    if (this.nam==''){
      this.nam=this.quizname.nativeElement.value
    }
    console.log(this.correctopt)
    /* this.quizService.setquiz(this.ques,this.option); */
    this.quizService.setquiz(this.ques,this.nam,this.correctopt,this.grade);
   
    this.ques=''
    this.option=[]
    this.num+=1;
    this.questionForm?.reset(); 
  }

  onFinish(){
    /* this.quizService.setfinal(this.nam) */
    this.num=0;
    this.nam='';
    this.quizService.set_arr=[];
    this.router.navigate(['/home'])
  }
}
