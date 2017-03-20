import { List, Book, User } from './../models';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

    private path: string = '/users';
    constructor(private api: ApiService) { }

    getLatest(): Observable<List<User>> {
        return this.api.get(this.path + '/latest');
    }

}