import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { Banner } from 'src/app/models/banner-response.model';
import { CareerData } from 'src/app/models/career-response.model';
import { CareerServiceService } from 'src/app/services/career-service.service';

@Component({
  selector: 'app-content-category',
  templateUrl: './content-category.component.html',
  styleUrls: ['./content-category.component.scss']
})
export class ContentCategoryComponent implements OnInit {

  banner$?: Observable<Banner>;

  careerData$?: Observable<CareerData>

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


  constructor(private fb:FormBuilder,private route: ActivatedRoute ,private careerService:CareerServiceService){}


  ngOnInit(): void {

    this.careerData$ = this.route.params.pipe(
      switchMap(params => this.careerService.getCareerDetails(params['id']))
    )

    this.banner$ = this.careerService.getBanner('career');


    this.careerData$.subscribe(console.log);
  }


}
