import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Week14 Build Environments');

  protected readonly env : any = environment

  ngOnInit(){
    console.log(`Production : ${this.env.production}`);
    console.log(`Environment : ${this.env.ENV}`);
    console.log(`API URL : ${this.env.apiURL}`);
  }
}
