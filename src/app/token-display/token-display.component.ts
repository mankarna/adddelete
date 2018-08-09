import { Component, Input} from '@angular/core';
import {TokenService} from '../token.service';
import { Token } from '../model/token';
@Component({
  selector: 'app-token-display',
  templateUrl: './token-display.component.html',
  styleUrls: ['./token-display.component.css'],
  providers:[TokenService]
})
export class TokenDisplayComponent  {

  @Input() token: Token;
 
  constructor(private tokenService: TokenService) {}
 
  delete(): void {
    this.tokenService.delete(this.token.tokenId).then(() => this.goBack());
  }
 
  goBack(): void {
    window.location.replace('');
  }

}
