import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  fakeObj = [
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/componylogo.png',
    },
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/Imagetest.png',
    },
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/componylogo.png',
    },
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/Imagetest.png',
    },
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/componylogo.png',
    },
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/Imagetest.png',
    },
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/componylogo.png',
    },
    {
      desc: 'The Article summary will be written down here in this area',
      img: '../../assets/Imagetest.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
