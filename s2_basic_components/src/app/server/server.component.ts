import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: [
        './server.component.css'
    ]
})

export class ServerComponent {
    private serverId: number;
    private serverStatus: string;
    constructor () {
        this.serverId = 10;
        this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';
    }
    public getServerId () {
        return this.serverId;
    }
    public getServerStatus () {
        return this.serverStatus;
    }

    public getServerColor () {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
