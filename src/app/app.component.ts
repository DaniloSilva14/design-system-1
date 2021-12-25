import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-system';

  items = [
    {title: 'Data Source', value: 'data-source'},
    {title: 'Botãos', value: 'buttons'},
    {title: 'Icones', value: 'icons'}
  ]

  constructor(
    private router: Router
  ) { }
  
  selectClick(value){    
    this.router.navigateByUrl('/'+value);
  }
}
