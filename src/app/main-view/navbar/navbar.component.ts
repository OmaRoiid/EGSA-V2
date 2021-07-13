import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  myNav = document.getElementById('slider');
  constructor() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 150) {
        document.getElementById('slider').classList.add('navbar-scrolled');
      } else if (window.scrollY < 150) {
        document.getElementById('slider').classList.remove('navbar-scrolled');
      }
    });
  }

  ngOnInit(): void {}
}
