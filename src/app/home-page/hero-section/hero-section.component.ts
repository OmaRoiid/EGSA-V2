import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  styles: [
    `
      /deep/.carousel-control-prev,
      /deep/.carousel-control-next {
        display: none;
      }
    `,
    `
      /deep/.carousel-indicators {
        bottom: -50px;
      }
    `,
  ],
})
export class HeroSectionComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
  }

  imageSlider = [
    {
      aquaText: 'GET TO KNOW:',
      SpaceName: 'Station X',
      paragrapgh: 'The jewel of our solar system',
      image: './../../../assets/PikPng.com_space-station-png_1121150.png',
    },
    {
      aquaText: 'GET TO KNOW:',
      SpaceName: 'Satellite Z',
      paragrapgh: 'The jewel of our solar system',
      image: './../../../assets/satellite@2x.png',
    },
  ];
  ngOnInit(): void {}
}
