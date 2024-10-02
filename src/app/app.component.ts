import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  data = 'This is my first angular project.'
  data2 = 'How is it?'

  getValue()
  {
    return this.data2;
  }

  getMulValue(a: number, b: number)
  {
    return a*b;
  }
}
