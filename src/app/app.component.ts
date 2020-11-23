import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private task:TaskService,private formBuilder: FormBuilder, private router: Router){

  }
  addForm:FormGroup;
  searchText;
  ngOnInit(){
    this.addForm = this.formBuilder.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      gender:['', Validators.required],
      marriage:['', Validators.required],
      mobileone:['', Validators.required],
      mobiletwo:['', Validators.required],
    })

    this.getAllFriends();
  }

  Friends:any=[];
  getAllFriends()
  {
    this.task.getFriends().subscribe(data => {
        this.Friends = data;
        console.log('getAll',this.Friends);
      })
}
obj:any;
isEdit:boolean=false;
getById(id){
  this.task.getFriendById(id).subscribe(id=>{
 this.obj = id;
 console.log('obj',this.obj);
 this.addForm.patchValue({
  firstname:this.obj.firstname,
  lastname:this.obj.lastname,
  gender:this.obj.gender,
  marriage:this.obj.marriage,
  mobileone:this.obj.mobileone,
  mobiletwo:this.obj.mobiletwo,
 })
  })
  this.isEdit= true
}

post:any;
createFriend(post){
this.task.createFriend(post).subscribe(post=>{
this.post = post;
console.log('post',this.post);
this.getAllFriends();
})

}

}
