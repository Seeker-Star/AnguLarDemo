import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-rxjs',
  templateUrl: './show-rxjs.component.html',
  styleUrls: ['./show-rxjs.component.css']
})
export class ShowRxjsComponent implements OnInit {


  myIp: string = "正在获取。。。";
  constructor() { }

  ngOnInit(): void {
    fetch('https://api.ipify.org/').then(
      r => r.text()
    ).then(ip => {
      this.myIp = ip;
    });
  }

}
