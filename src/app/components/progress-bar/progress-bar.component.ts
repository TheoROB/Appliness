import { Component, Input } from '@angular/core';
@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input('progress') progress: any;
  public progressComponent = 0;
  constructor() {
    const refreshId = setInterval(() => {
      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progressComponent == this.progress) {
        this.progressComponent = this.progress;
        clearInterval(refreshId);
      } else {
        this.progressComponent += 1;
      }
    }, 50);
  }
}
