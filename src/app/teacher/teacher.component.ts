import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

constructor(private http:HttpClient)  {}

obj:any
ngOnInit() {
  this.http.get('http://127.0.0.1:8000/get-grades/', { responseType: 'json' }).subscribe(
    data => {
      this.obj = data;
      console.log("hiii", this.obj);
    }
  );
}
}


