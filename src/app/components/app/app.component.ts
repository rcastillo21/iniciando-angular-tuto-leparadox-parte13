import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parte13';

  lista = [
    {id: 1, nombre: 'Pacific Rim', precio: 6.80}
  ];
}
