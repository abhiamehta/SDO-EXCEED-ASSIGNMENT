import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sdo-recent-works-section',
  templateUrl: './recent-works-section.component.html',
  styleUrls: ['./recent-works-section.component.scss']
})
export class RecentWorksSectionComponent implements OnInit {
  img1SectionHover = false;
  img2SectionHover = false;
  img3SectionHover = false;
  img4SectionHover = false;
  img5SectionHover = false;
  img6SectionHover = false;
  portFolioSlideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true
  };
  porfolio1SlideArr = [
    {
      img: 'assets/images/port-ca-1.jpg'
    },
    {
      img: 'assets/images/port-ca-2.jpg'
    },
  ];
  porfolio2SlideArr = [
    {
      img: 'assets/images/port-ca-3.jpg'
    },
    {
      img: 'assets/images/port-ca-4.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
