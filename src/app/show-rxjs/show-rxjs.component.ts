import { Component, OnInit } from '@angular/core';
import {interval, take} from "rxjs";

@Component({
  selector: 'app-show-rxjs',
  templateUrl: './show-rxjs.component.html',
  styleUrls: ['./show-rxjs.component.css']
})
export class ShowRxjsComponent implements OnInit {

  showNumber: number = 0;
  constructor() { }

  ngOnInit(): void {

    const numbers = interval(10)
    const takeFourNumbers = numbers.pipe(take(4000));
    takeFourNumbers.subscribe(x => this.showNumber = x);
  }

}
