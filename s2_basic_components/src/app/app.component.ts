import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private clickTimes = [];
  private paragraphToggle = true;

  public onToggleDetails () {
    this.paragraphToggle = !this.paragraphToggle;
    this.clickTimes.push(Date.now().toString());
  }

  public getBgColor (index: number) {
    return index >= (5 - 1) ? 'blue' : 'transparent';
  }

  public getTextColor ( index: number) {
    return index >= 5 - 1;
  }
}
