import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {MovieService} from "../../services";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form: FormGroup;

  constructor(private movieService: MovieService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)])
    });
  }

  search(): void {
    if (this.form.value.find) {
      this.router.navigate(['/search/movie'], {queryParams: {query: this.form.value.find}});
    }
    this.form.reset();
    console.log(this.form.value)
  }

}
