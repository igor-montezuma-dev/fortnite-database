import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ApiResponse, BrItem, ShopItem } from '../../../../models/shopItem';
import { DailyShopService } from './daily-shop.service';

@Component({
  selector: 'app-daily-shop',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule],
  templateUrl: './daily-shop.component.html',
  styleUrl: './daily-shop.component.scss',
})
export class DailyShopComponent implements OnInit {
  products: any[] | undefined;
  brItems: any[] | undefined;
  shopItems: ShopItem[] = [];
  public mappedShopItems: any[] = [];
  item: any;

  responsiveOptions: any[] | undefined;

  constructor(private dailyShopService: DailyShopService) {}

  ngOnInit() {
    this.getShopItems();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  public getShopItems() {
    this.dailyShopService.getShop().subscribe({
      next: (response: ApiResponse) => {
        this.shopItems = response.data.entries.map((item: any) => {
          return {
            regularPrice: item.regularPrice,
            finalPrice: item.finalPrice,
            inDate: item.inDate,
            outDate: item.outDate,
            giftable: item.giftable,

            brItems: item?.brItems?.map((brItem: BrItem) => {
              return {
                id: brItem.id,
                name: brItem.name,
                description: brItem.description,
                type: {
                  value: brItem.type.value,
                  displayValue: brItem.type.displayValue,
                  backendValue: brItem.type.backendValue,
                },
                rarity: {
                  value: brItem.rarity.value,
                  displayValue: brItem.rarity.displayValue,
                  backendValue: brItem.rarity.backendValue,
                },

                images: {
                  smallIcon: brItem.images.smallIcon,
                  icon: brItem.images.icon,
                  featured: brItem.images.featured,
                },
              };
            }),
          };
        });

      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public getSeverity(status: string) {
    switch (status) {
      case 'rare':
        return 'success';
      case 'icon':
        return 'warning';
      case 'marvel':
        return 'danger';
      default:
        return '';
    }
  }
}
