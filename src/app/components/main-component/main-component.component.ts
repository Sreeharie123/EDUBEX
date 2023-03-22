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

  }

}
