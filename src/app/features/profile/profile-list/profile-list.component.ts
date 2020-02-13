import { Component, OnInit } from '@angular/core';
import { getUserProfiles } from '@store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileActions } from '@store/actions';
import { Router } from '@angular/router';

export interface tableUser {
  picture: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

  displayedColumns: string[] = ['picture', 'firstName', 'lastName'];

  users$ = this.store.select(getUserProfiles);

  constructor (private store: Store<AppState>, private router: Router) {}

  ngOnInit () {

      this.store.dispatch(ProfileActions.initProfiles());

  }

  goToProfile(profileId: number) {
    this.router.navigate(['/profile-detail', profileId]);
  }

}
