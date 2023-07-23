import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sdo-clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.scss']
})
export class ClientsSectionComponent implements OnInit {
  clientSlideConfig: any;
  clientsImgArr: any;
  constructor() { }

  ngOnInit(): void {
    this.setClientsData();
  }
  setClientsData() {
    this.clientSlideConfig = {
      "slidesToShow": 6, 
      "slidesToScroll": 1, 
      "dots": true,
      "infinite": true,
    };;
    this.clientsImgArr = [
      {
        img: '../../../assets/images/client-1.png'
      },
      {
        img: '../../../assets/images/client-2.png'
      },
      {
        img: '../../../assets/images/client-3.png'
      },
      {
        img: '../../../assets/images/client-4.png'
      },
      {
        img: '../../../assets/images/client-5.png'
      },
      {
        img: '../../../assets/images/client-6.png'
      },
      {
        img: '../../../assets/images/client-7.png'
      },
      {
        img: '../../../assets/images/client-8.png'
      },
      {
        img: '../../../assets/images/client-9.png'
      }
    ];
  }

}
