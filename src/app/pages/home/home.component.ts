import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { RouterModule } from '@angular/router';
import { DailyShopComponent } from './components/daily-shop/daily-shop.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, DailyShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private service = inject(HomeService);

  shopItems: any[] = [];

  ngOnInit(): void {
    //this.fetchData();
  }


  public fetchData() {
    this.service.getShop().subscribe({
        next: (data: any) => {
            this.shopItems = data.data.entries.map((item: any) => {
                return {
                    regularPrice: item.regularPrice
                };
            });
            console.log(this.shopItems);
        },
        error: (error) => {
            console.error(error);
        }
    });
}
}
