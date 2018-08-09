import { Component, OnInit } from '@angular/core';
import {TokenService} from '../token.service';
import { Token } from '../model/token';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.css']
})
export class CreateTokenComponent implements OnInit {

  token= new Token;
  submitted = false;
  constructor(private tokenService: TokenService,
    private location: Location) {}
 
  

  ngOnInit() {
  }
  newToken(): void {
    this.submitted = false;
    this.token = new Token();
  }
  private save(): void {
    this.tokenService.create(this.token);
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
 
  goBack(): void {
    this.location.back();
  }
}
