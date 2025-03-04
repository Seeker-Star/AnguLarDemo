import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  private worker: Worker | undefined;

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      // 创建 Worker
      this.worker = new Worker(new URL('./worker/my-worker.worker', import.meta.url), {type: 'module'});

      // 监听 Worker 的返回消息
      this.worker.onmessage = ({data}) => {
        console.log(`从 Worker 收到的数据: ${data}`);
      };
    } else {
      console.warn('Web Workers 不受支持');
    }
  }

  ngOnDestroy() {
    if (this.worker) {
      this.worker.terminate();
    }
  }

  count() {
    if (this.worker) {
      this.worker.postMessage(40);
    }
  }

}
