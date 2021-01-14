import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) {
  }

  getNews = () => this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  getSingleNews = (id) => this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  getComments = (id) => this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

}

