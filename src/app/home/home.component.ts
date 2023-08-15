import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router, private route:ActivatedRoute){}
  
  title = 'web_dev';
  not_disp=false;

  loadstudent(){
    this.router.navigate(['student'])
    this.not_disp=true;
  }

  loadteacher(){
    this.router.navigate(['teacher'])
    this.not_disp=true;

  }

}
