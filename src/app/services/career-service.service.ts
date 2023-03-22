import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BannerResponse } from '../models/banner-response.model';
import { CareerResponse } from '../models/career-response.model';
import { PerkResponseModel } from '../models/perk-response.model';
import { WorkResponseModel } from '../models/work-response.model';

@Injectable({
  providedIn: 'root',
})
export class CareerServiceService {
  apiRoot = 'https://admin-edubex.ipixsolutions.net/api/v1';

  constructor(private http: HttpClient) {}

  getCareerList() {
    return this.http.get<CareerResponse>(`${this.apiRoot}/career/list`).pipe(
      map((res) => res.careers)
    );
  }

  getBanner(slug: string){
    return this.http.get<BannerResponse>(`${this.apiRoot}/cms/banner/get`,{params: {slug}} ).pipe(
      map(res => res.banners),
      map(banners =>  banners[0])
    );
  }

  getWork(slug:string){
    return this.http.get<WorkResponseModel>(`${this.apiRoot}/cms/pages/get`,{params: {slug}} ).pipe(
      map(res => res.cms),
    );

  }

  getPerk(slug:string){
    return this.http.get<PerkResponseModel>(`${this.apiRoot}/cms/pages/get`,{params: {slug}} ).pipe(
      map(res => res.cms),
    );
  }

}
