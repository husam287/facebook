import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-omg',
  templateUrl: './omg.component.html',
  styleUrls: ['./omg.component.css']
})
export class OmgComponent implements OnInit {

  start=false;
  login=false;
  endGame=false;
  constructor(private router:Router,private users:UsersService) { }

  ngOnInit(): void {
    this.login=this.users.login
  }

  startGame(){
    if(this.login){
      this.start=true
      this.endGame=false
    }
    else{
      if(confirm('Please Login First')){
        this.router.navigate(['facebook','login'])
      }
    }
    
  }
  game(){
    alert('شكرا يا بنتي على ثقتك الغالية');
    this.endGame=true;
  }
}
