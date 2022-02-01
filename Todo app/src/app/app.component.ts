import { Component } from '@angular/core';
 import {  userInterface } from './type/user.interface';
 import {myTodo} from './type/user.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public userName: string ="";
public email: string =""
public password: any= ""
public cPassword: any =""
public myObj: object ={};
public userArray:userInterface[]=[]
public signUp:boolean =true
public logInUI:boolean =false
public emailLog:string =""
public passwordLog: any = ""
public dashBoard :boolean =false 
public category: string = "";
  public item : string ="";
  public alerm : string ="";
  public myTodoObj : object = {}
  public allMyTOdo:myTodo[]=[]
  public delete: boolean = true
  public editedIndex: number =0
  public loadsOfTodos: any
  public editCategory: string =""
  public editItem : string =""
  public editAlerm:string =''
  
  







  createAccount(){
    this.userArray = localStorage[ "Next"]? JSON.parse(localStorage["Next"]) : []
  
  if ((this.userName=="")||(this.email=="")||(this.password=="")||(this.cPassword=="")) {
        alert("Hey,Please fill up your details")
    
    
  }else if((this.userName=="")&&(this.email=="")&&(this.password=="")&&(this.cPassword=="")){
    alert("Details not complete")

  }else if (!this.email.includes('@gmail.com')){
    alert("Please check your email")

  }else if ((this.password !== this.cPassword)){
  alert("check your password")
 }else {
   this.userArray.push({
     user: this.userName,
     mail: this.email,
     first_password:this.password,
     confirmPassword: this.cPassword,
      // todo:this.allMyTOdo

   })
   console.log(this.userArray);
   localStorage.setItem("Next",JSON.stringify(this.userArray)) 
   this.signUp= false 
   this.logInUI= true
   
 }
}

logIn(){


  let check =this.userArray.find((val, i)=>val.mail==this.emailLog && val.first_password==this.passwordLog )
  console.log(check);
  if (!check) {
    alert("hey, not found")
    
  } else {
    localStorage.setItem("currentUser", JSON.stringify(check))
    const indexOfUser = this.userArray.indexOf(check)
    localStorage.setItem("currentIndex",JSON.stringify(indexOfUser))
    this.logInUI= false
    this.dashBoard = true


  }
  
}

addTodo(){
  this.allMyTOdo.push({
    highlight :this.category,
    whaty : this.item ,
    notify : this.alerm ,
  })
  
  console.log(this.allMyTOdo);
  localStorage.setItem('myTodo',JSON.stringify(this.allMyTOdo));
  this.category ="";
  this.item ="";
  this.alerm='';
  
}
deleteTodo(i:number){
  this. delete = window.confirm("This todo would delete permently, are you sure you want to delete it?")
  if (this.delete) {
    this.allMyTOdo= this.allMyTOdo.filter((_, index)=> index!==i)
    
  }
}

edit(i:number){
this.editedIndex =i;
console.log(this.allMyTOdo);
// this.category = this.allMyTOdo[i].highlight
// this.item = this.allMyTOdo[i].whaty
// this.alerm = this.allMyTOdo[i].notify
this.editCategory =this.allMyTOdo[i].highlight
this.editItem = this.allMyTOdo[i].whaty
this.editAlerm =this.allMyTOdo[i].notify
console.log(this.editedIndex );



}
saveTodo(){
  this.allMyTOdo[this.editedIndex]={
      highlight :this.editCategory,
      whaty : this.editItem ,
      notify : this.editAlerm ,
  }

}

}
