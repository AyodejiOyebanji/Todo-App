import { Component } from '@angular/core';
import { studentInterface } from './type/students.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string ='';
  public lName:string = '';
  public department:string = "";
  public myIdentif?:any;
   public sch?:any;
   
   public age: number = 30;
   public you: number = 4 
   public rid: string="ayo"
   //public allStudents:string[]= []
   //  public allStudents:Array<string>= []
   //public allStudents:Array<object> =[]
   public object:object = {};
   public allStudents:studentInterface[] =[]
   public editMode:boolean=false;
   public loadsOfStudents?:any;
   public student?: any;
   public editedIndex:number=0
   public disabledValue:boolean= false
   public imageLink:string ="../assets/images/divido.jfif"
   public link : string ="https://www.firstbanknigeria.com/"
   public colorForBoy:string ='text-success'
   public colorForGirl: string ="text-danger"
   public gender: string = "female"


   

   
   changeName(){
    this.name = 'AYODEJI'
  
  }
  
  
  changeNumber(){
       this.you =  Math.floor(Math.random()*10)
  } 
  addStudents(){

   // this.allStudents.push(this.name);
    this.allStudents.push({
      fName : this.name,
      lName: this.lName,
      dept: this.department,
      recog: this.myIdentif,
      school: this.sch,
     });
    console.log(this.allStudents);
    this.name='';
    this.lName='';
    this.department='';
     this.myIdentif='';
     this.sch='';
  }
  deleteStudent(i:number){
    this.allStudents = this.allStudents.filter((_,index)=> index!==i)
    console.log(i)

  }

  editMe(student:studentInterface, i:number){
    console.log(i);
   this.loadsOfStudents= this.allStudents.find((val,index)=>index==i);
    console.log(this.loadsOfStudents);
    
  }
  // editStudent(i:number){
  //   this.editMode = true;
  //   this.editedIndex =i;
  //   console.log(this.allStudents);
    
  //   this.name = this.allStudents[i].fName;
  //   this.lName = this.allStudents[i].lName;
  //   this.department = this.allStudents[i].dept
  //   this.myIdentif = this.allStudents[i].recog
  //   this.sch = this.allStudents[i].school
  //   console.log(this.editedIndex);
    
    
  // }
  edit(i:number) {
    // this.editMode = true;
    this.editMode = true;
    this.editedIndex =i;
    console.log(this.allStudents);
    
    this.name = this.allStudents[i].fName;
    this.lName = this.allStudents[i].lName;
    this.department = this.allStudents[i].dept
    this.myIdentif = this.allStudents[i].recog
    this.sch = this.allStudents[i].school
    console.log(this.editedIndex);
  }


  saveChange(){
    this.allStudents[this.editedIndex]={
      fName : this.name,
      lName: this.lName,
      dept: this.department,
      recog: this.myIdentif,
      school: this.sch,

    }
    this.editMode = false;

  }


  
}
