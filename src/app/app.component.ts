import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MyInfoComponent  } from './my-info/my-info.component';
import { FooterComponent  } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MyInfoComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'about-me-app';
}
