import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})

export class MesssageService {
    public routeSource = new BehaviorSubject<string>('technical');
    constructor() { }
    changeRoute(route: string) {
        this.routeSource.next(route);
    }
}
