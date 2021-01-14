import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {NewsApiService} from '../../services/news-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id;
  item;
  comments;

  constructor(private route: ActivatedRoute, private  router: Router, public  NewsApi: NewsApiService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get(`id`);
    console.log(this.id);
    this.NewsApi.getSingleNews(this.id).subscribe(res => this.item = res);
    this.NewsApi.getComments(this.id).subscribe(res => this.comments = res);
    console.log(this.item);

  }

  backClicked(): void {
    this.router.navigate(['/']);
  }
}
