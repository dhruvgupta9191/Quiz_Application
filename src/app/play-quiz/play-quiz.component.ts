import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute ,Params,Router} from '@angular/router';
import { QuizService } from '../quiz.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {
  id:any;
  quiz:any;
  cnt:number=0;
  sub:any;
  total:any[]= [];
  len:any;
  disp=false;
  ans:any='';
  grade:any[]=[]
  @ViewChild('fo') questionForm:NgForm | undefined;
  constructor(private route:ActivatedRoute, private quizservice:QuizService,private router:Router){
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
      console.log(this.id);
    }
    );
    console.log(this.quizservice.getquizarray()[this.id]);
    
    quizservice.getquiz().then((data: any[]) => {
      console.log(data); // Access the array of data here
      for (let i=0;i<data.length;i++){
        if (data[i].subject==this.quizservice.getquizarray()[this.id-1]){
          this.total.push(data[i])
        }
        
      }
      
      // Perform further processing with the data here
    }).catch(error => {
      console.error('Error occurred during data fetching:', error);
    });
    console.log(this.total);
 
  }
  
    ngOnInit(): void {
      
    }
  checkAns(actualans:any,grad:any){
    /* console.log(this.quiz[id][1][4].correctopt);
    console.log(this.quiz[id][1][opt])
    if ((this.quiz[id][1][4].correctopt)==(this.quiz[id][1][opt])){
      console.log("yasss")
      this.cnt+=1
    }
    else{
      this.cnt-=1;
    }
    console.log(this.cnt); */
    this.ans=this.questionForm?.value.ans;
    console.log(this.ans);
    console.log(actualans)
    if (this.ans==actualans){
      this.grade.push(grad);
    }
    else{
      this.grade.push("Incorrect Answer");
    }

  }

  checkgrades(){
    this.disp=true
  }
  
  redirection(){
    this.router.navigate(['/student'])
  }

}


