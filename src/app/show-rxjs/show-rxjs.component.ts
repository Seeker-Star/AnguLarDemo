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

  // @ts-ignore
  getFiles(e){
    const input = e.target
    const reader = new FileReader()
    reader.onload = (() => {
      if(reader.result) {
        const json = eval('(' + reader.result + ')')
        console.log('测试', json.editorData)
        // console.log("测试",JSON.parse(JSON.stringify(reader.result)))
      }
    })
    reader.readAsText(input.files[0], 'utf-8')
  }

}
