import { Component, OnInit } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, Subscription } from 'rxjs';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  countries:string[]=['All','Africa','America','India','London','UAE']
  // education:string[]=['Educator, Data Scientist','Educator, Data Scientist','Educator, Data Scientist','Educator, Digital Marketer','Educator, Digital Marketer','Educator, Product Designer','Educator, Digital Marketer','Educator, Digital Marketer','Educator, Digital Marketer','Coordinator,Adminssions','Coordinator,Adminssions']
  // Location:string[]=['New York','Dubai','New York','Trivandrum','Chennai','London','London','New York','Namibia','Nambibia','Nambibia']
  allData?:any[]
  ngOnInit(): void {

      const data$=fromFetch('https://admin-edubex.ipixsolutions.net/api/v1/career/list').pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${ response.status }` });
        }
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message })
      }))

      data$.subscribe((data)=>{
        // console.log(data.careers)
        this.allData=data.careers
        console.log(this.allData)
      })

  }


}
