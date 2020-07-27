import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
error=false
  constructor(private users:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(form.dirty){
      this.users.uploadInfo(form.value).subscribe(()=>{
        this.users.login=true;
        this.router.navigate([''])
      })
    }
    else
    this.error=true;
}

}
