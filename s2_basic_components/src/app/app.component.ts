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

  public getBgColor () { /*This aproach does not work properly*/
    const bgColor = this.clickTimes.length >= 5 ? 'blue' : 'transparent';
    console.log('El color devuelto es: ' + bgColor);
    return bgColor;
  }

  public getTextColor ( index: number) {
    return index >= 5 - 1;
  }
}
