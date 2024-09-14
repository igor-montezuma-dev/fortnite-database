import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../models/shopItem';

@Injectable({
  providedIn: 'root'
})
export class DailyShopService {

  protected readonly BASE_URL: string = 'shop';
  private http = inject(HttpClient);

  public getShop():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.api}/${this.BASE_URL}`);
  }
}
