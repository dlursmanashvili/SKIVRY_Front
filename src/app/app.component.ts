import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private router: Router = inject(Router);
  private currentRoute: string = '';

  public get notAllowedRoutes() {
    return !this.currentRoute.includes('login');
  }

  ngOnInit(): void {
    this.router.events.subscribe(_ => {
      if(_.type == 1) // Navigation END Type
      {
        console.log(_)
        this.currentRoute = _.url;
      }
    })
  }
}
