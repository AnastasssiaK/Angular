import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(value => {
      // console.log(this.router.getCurrentNavigation()?.extras.state['data']);
      this.postDetails = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IPost;
    });

  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(value => {
    //   let {state: {data}} = history;
    //   this.userDetailsObj = data as IUserDetails;
    // });
  }

  //ddos:
  // constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }
  //
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(({id}) => {
  //     this.postService.getById(id).subscribe(value => this.postDetails = value)
  //   })
  // }

}
