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
    this.clickTimes.push(this.clickTimes.length + 1);
  }
}
