import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auth0Service } from './../../../services/auth0.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  loggedInSub: Subscription;

  constructor(private auth: Auth0Service, private router: Router) {
    auth.handleLoginCallback();
  }

  ngOnInit() {
    this.loggedInSub = this.auth.loggedIn$.subscribe(
      loggedIn => loggedIn ? this.router.navigate(['/']) : null
    )
  }

  ngOnDestroy() {
    this.loggedInSub.unsubscribe();
  }

}
