import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-category',
  templateUrl: './content-category.component.html',
  styleUrls: ['./content-category.component.scss']
})
export class ContentCategoryComponent {
  postForm=this.fb.group({
    firstname:['',Validators.required],
    email:['',Validators.required],
    location:['',Validators.required],
    linkedin:['',Validators.required],
    lastname:['',Validators.required],
    phone:['',Validators.required],
    resume:['',Validators.required],
    website:['',Validators.required],
  })

  get fc(){
    return this.postForm.controls
  }


  constructor(private fb:FormBuilder){}



}
