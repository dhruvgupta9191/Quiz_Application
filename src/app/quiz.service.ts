import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  set_arr:any=[];
  finarr:any=[];
  


  constructor(private http:HttpClient) { }
  /* setquiz(quizquest:string,question:string[]){
    this.set_arr.push([quizquest,question]);
    console.log(this.set_arr);
  } */

  setquiz(quizquest:string,subject:any,correct:string,grade:any){
    const data = {
      question: quizquest,
      subject: subject,
      answer: correct,
      grade:grade
    };
    this.http.post('http://127.0.0.1:8000/insert-grades/', data).subscribe(
      response => {
        console.log(data)
        console.log('Grades inserted successfully:', response);
      },
      error => {
        console.error('Error occurred while inserting grades:', error);
      }
    );
    /* this.set_arr.push([quizquest,question]);
    console.log(this.set_arr); */
  }
  obj:any
  getquiz(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://127.0.0.1:8000/get-grades/', { responseType: 'json' }).subscribe(
        data => {
          this.obj = data;
          console.log("hiii", this.obj);
          resolve(this.obj); // Resolve the Promise with the assigned data
        },
        error => {
          console.error('Error occurred while getting quiz:', error);
          reject(error); // Reject the Promise if an error occurs
        }
      );
    });
  }/* {
    return this.http.get('http://127.0.0.1:8000/get-grades/', { responseType: 'json' }).subscribe(
    data => {
      this.obj = data;
      console.log("hiii", this.obj);
    }
  );
  } */

  getquizarray(){
    return(['math','cse']);
  }

  /* setfinal(quizname:string){
    this.finarr.push([quizname,this.set_arr])
    console.log(this.finarr)
  } */

}
