import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ApiResponse, BrItem, ShopItem } from '../../../../models/shopItem';
import { DailyShopService } from './daily-shop.service';

@Component({
  selector: 'app-daily-shop',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    SkeletonModule,
    TagModule,
  ],
  templateUrl: './daily-shop.component.html',
  styleUrls: ['./daily-shop.component.scss'],
})
export class DailyShopComponent implements OnInit {
  products: any[] | undefined;
  brItems: any[] | undefined;
  shopItems: ShopItem[] = [];
  severities: string[] = [];
  item: any;
  isLoading = true;

  responsiveOptions: any[] | undefined;

  constructor(private dailyShopService: DailyShopService) {}

  ngOnInit() {
    this.getShopItems();

    setTimeout(() => {
      this.isLoading = false;

      this.shopItems.forEach((item) => {
        const rarity = item?.brItems?.[0]?.rarity?.value || 'default';
        const severity = this.getSeverity(rarity);
        this.severities.push(severity);
      });
    }, 2000);

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
                rarity: {
                  value: brItem.rarity.value,
                  displayValue: brItem.rarity.displayValue,
                  backendValue: brItem.rarity.backendValue,
                  severity: this.getSeverity(brItem.rarity.value),
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

        console.log(this.shopItems);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getSeverity(
    rarity: string
  ): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast'  {
    switch (rarity) {
      case 'rare':
        return 'warning';
      case 'icon':
        return 'info';
      case 'marvel':
        return 'danger';
      case 'uncommon':
        return 'success';
      case 'common':
        return 'secondary';
      case 'epic':
        return 'warning';
      default:
        return 'success';
    }
  }
}
