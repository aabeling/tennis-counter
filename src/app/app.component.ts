import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'tennis-counter';

  ngOnInit() {
    document.addEventListener('deviceready', function() {
      alert(device.platform);
    }, false);
  }

}
