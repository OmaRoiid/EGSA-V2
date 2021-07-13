import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divsion',
  templateUrl: './divsion.component.html',
  styleUrls: ['./divsion.component.css'],
})
export class DivsionComponent implements OnInit {
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
