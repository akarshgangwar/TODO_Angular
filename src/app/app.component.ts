import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
task:string="";
taskList:string[]=[];


onaddclick(){
  if(this.task!='')
  {
    this.taskList.push(this.task)
    this.task="";
  
  }
  }
  Ondelete(i:number){
    this.taskList.splice(i,1);
  }

  title = 'todo';
}
