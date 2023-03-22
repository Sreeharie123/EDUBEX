import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-content-category',
  templateUrl: './content-category.component.html',
  styleUrls: ['./content-category.component.scss']
})
export class ContentCategoryComponent implements OnInit {
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


  ngOnInit(): void {}


}
