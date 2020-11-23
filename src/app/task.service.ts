import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  getFriends():Observable<any> {
    return this.http.get<any>('http://localhost:3000/posts')
  }
  getFriendById(id:number){
    return this.http.get<any>('http://localhost:3000/posts/'+id)
  }
  createFriend(friend){
    return this.http.post<any>('http://localhost:3000/posts',friend)
  }

}
