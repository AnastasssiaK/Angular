import {Component, Input, OnInit} from '@angular/core';

import {IUserDetails} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      // @ts-ignore
      this.userService.getById(id).subscribe(value => this.userDetails = value);
    });
  }

}
