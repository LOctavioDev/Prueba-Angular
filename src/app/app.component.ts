import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reto';
  estasiguiendo: boolean = false;

  seguirNoseguir() {
    this.estasiguiendo = !this.estasiguiendo    
    
  }
}

