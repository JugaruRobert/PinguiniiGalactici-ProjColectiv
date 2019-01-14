import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../../shared/services/ApiUrls';


@Injectable()
export class AssignGroupService{

    constructor(private httpClient: HttpClient) {
    }

    createNewGroup(info) {
        debugger;
        this.httpClient.post(ApiUrl.ngRokUrl + '/groups', info).subscribe(s => {
            console.log(s);
        });
        //console.log(info);
    }

    createCourse(info) {
        this.httpClient.post(ApiUrl.ngRokUrl + '/courses', info).subscribe(s => {
            console.log(s);
        });
    }
}
