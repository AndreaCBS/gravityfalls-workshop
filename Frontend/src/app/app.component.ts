import { Component } from '@angular/core';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gravityfalls-workshop';
}
