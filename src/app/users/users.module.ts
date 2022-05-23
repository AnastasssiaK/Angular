import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./users-components/users/users.component";
import {UserDataService} from "./users-services/user-data.service";
import {UserComponent} from './users-components/user/user.component';
import {UserDetailsComponent} from './users-components/user-details/user-details.component';
import {UsersResolver} from "./users-services/resolvers/users.resolver";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UserGuard} from "./users-services/guards/user.guard.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserDataService,
    UsersResolver,
    UserResolver,
    UserGuard,
    // {
    //   provide: 'usersResolve',
    //   useValue:()=>{}
    // }
  ]
})
export class UsersModule {
}
