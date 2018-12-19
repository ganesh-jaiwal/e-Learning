import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  isServerName = false;
  serverCreatedStatus = 'No server was created';
  serverName = 'TestServer';
  constructor() {
  	setTimeout( ()=> {
  		this.allowNewServer = true;
  	}, 2000);
  }
  onServerCreated() {
    this.isServerName = true;
  	this.serverCreatedStatus = 'Server was created!';
  }
  onServerNameUpdated(event: Event) {
  	this.serverName = (<HTMLInputElement>event.target).value;
    if(this.serverName == "") {
      this.allowNewServer = false;
      this.isServerName = false;
    }
  }
  ngOnInit() {
  }

}
