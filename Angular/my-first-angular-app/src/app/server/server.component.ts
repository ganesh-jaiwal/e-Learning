import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			color: blue;
		}
		.offline {
			color: white;
		}
	`]
})
export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';

	constructor() {
		this.serverId = Math.floor(Math.random() * 100) + 1;
		this.serverStatus = this.serverId >= 50 ? 'Online' : 'Offline'
	}
	getServerStatus() {
		return this.serverStatus;
	}
	getColor() {
		return this.serverStatus === 'Online' ? 'palegreen' : 'red';
	}
}