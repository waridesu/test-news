import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsApiService} from '../services/news-api.service';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {Router} from '@angular/router';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  articles;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  constructor(public  NewsApi: NewsApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.NewsApi.getNews().subscribe(res =>
      this.articles = res);
  }

  onSingleNews(item): void {
    this.router.navigate(['/detail/' + item.id]);
  }

  onScroll(): void {
    console.log('scrolled');
  }
}
