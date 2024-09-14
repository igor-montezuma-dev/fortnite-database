import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  protected readonly BASE_URL: string = 'shop';
  private http = inject(HttpClient);

  public getShop() {
    return this.http.get(`${environment.api}/${this.BASE_URL}`);
  }
}
