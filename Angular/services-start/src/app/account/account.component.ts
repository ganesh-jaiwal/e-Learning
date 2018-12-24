import { Component, Input } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountsService) {}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    // this.logginService.logAccountStatus(status);
    this.accountService.statusUpdated.emit(status);
  }
}
