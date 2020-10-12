import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgForm }   from '@angular/forms';
import { student} from '../student';
@Component({
  selector: 'app-stu',
  templateUrl: './stu.component.html',
  styleUrls: ['./stu.component.css']
})
export class StuComponent{
  id:number =0;
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(params => {this.id = +params['id'];});
    console.log("id" + this.id);

  }

  stu : student[] = [new student(1,"Akriti","CSE",8),
    new student(2,"Akriti","CSE",8),
    new student(3,"Akriti","CSE",8),
    new student(4,"Akriti","CSE",8)
  ];
  name:string;
  branch:string;
  avg_gpa:number;

  flag : number =0;
  l:number=0;
  ngOnInit(){
      for(let i = 0; i<this.stu.length;i++){
        if(this.id==this.stu[i].id){
          this.flag=1;
          this.l = i;
        }
        this.id = this.stu[this.l].id;
        this.name = this.stu[this.l].name;
        this.branch = this.stu[this.l].branch;
        this.avg_gpa = this.stu[this.l].avg_gpa;

      }
  }

}
