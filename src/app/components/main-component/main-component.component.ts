import { Component, OnInit } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, Subscription, Observable } from 'rxjs';
import { CareerServiceService } from 'src/app/services/career-service.service';
import { Career } from 'src/app/models/career-response.model';
import { Banner } from 'src/app/models/banner-response.model';
import { Cms } from 'src/app/models/work-response.model';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  countries: string[] = ['All', 'Africa', 'America', 'India', 'London', 'UAE'];

  banner$?: Observable<Banner>;
  careers$?: Observable<Career[]>
  work$?:Observable<Cms>;
  perk$?:Observable<Cms>;

constructor(private careerService: CareerServiceService){}



  ngOnInit(): void {

    this.careers$ = this.careerService.getCareerList();
    this.banner$ = this.careerService.getBanner('career');
    this.work$=this.careerService.getWork('why-work-with-us');
    this.perk$=this.careerService.getPerk('perks-benefits')

    this.perk$.subscribe(console.log)




//     //Career list
//     const data$ = fromFetch(
//       'https://admin-edubex.ipixsolutions.net/api/v1/career/list'
//     ).pipe(
//       switchMap((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           return of({ error: true, message: `Error ${response.status}` });
//         }
//       }),
//       catchError((err) => {
//         console.error(err);
//         return of({ error: true, message: err.message });
//       })
//     );

//     data$.subscribe((data) => {
//       // console.log(data.careers)
//       this.allData = data.careers;
//       // console.log(this.allData)
//     });



// //Work With Us
//     const work$ = fromFetch(
//       'https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=why-work-with-us'
//     ).pipe(
//       switchMap((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           return of({ error: true, message: `Error ${response.status}` });
//         }
//       }),
//       catchError((err) => {
//         console.error(err);
//         return of({ error: true, message: err.message });
//       })
//     );

//     work$.subscribe((data) => {
//       this.workWithUs=data.cms
//       // console.log(this.workWithUs)
//     });



// //Perks and benefits
//     const perk$ = fromFetch(
//       'https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=why-work-with-us'
//     ).pipe(
//       switchMap((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           return of({ error: true, message: `Error ${response.status}` });
//         }
//       }),
//       catchError((err) => {
//         console.error(err);
//         return of({ error: true, message: err.message });
//       })
//     );
//     perk$.subscribe((data) => {
//      console.log("perk",data.cms)
//      this.perk=data.cms
//     });
  }

}
