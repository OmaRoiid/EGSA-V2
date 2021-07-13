import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EGSA-Website';
  mybutton = document.getElementById("myBtn");

  constructor(){

  

    window.addEventListener('scroll', function () {

      if (window.scrollY >= 200) {
        document.getElementById('topBtn').classList.add("block");
         
      }
      else if (window.scrollY < 200) {
        document.getElementById('topBtn').classList.remove("block");
    
      }
  });
  }


 topFunction() {
  document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  document.documentElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

}
