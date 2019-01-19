import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  server = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getUrl(uri = '') {
    return `${this.server}/${uri}`;
  }

  createParticipant(email_id: String, userProfileName: String,role:String) {
    const body = { email_id: email_id, userProfileName: userProfileName ,role: role};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.getUrl('users/newParticipant'), body).pipe(map(res => res, {'headers': headers}));
  }

  updateParticipant(email_id: String, oldPassword: String,newPassword:String) {
    const body = { email_id: email_id, oldPassword: oldPassword ,newPassword: newPassword};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.getUrl('users/updatePassword'), body).pipe(map(res => res, {'headers': headers}));
  }

  getAllParticipants(role: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.getUrl('users/All/'+role)).pipe(map(res => res, {'headers': headers}));
  }

  deleteParticipant(id: String) {
    const body = { id: id };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.getUrl('users/removeParticipant'), body).pipe(map(res => res, {'headers': headers}));
  }

}
