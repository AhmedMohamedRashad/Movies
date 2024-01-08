import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgPrefix:string = "https://image.tmdb.org/t/p/w500/"
  trendingMovie:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];
  constructor(private _MoviesService:MoviesService) {

    _MoviesService.getTrending("movie").subscribe((data)=>{
      this.trendingMovie = data.results.slice(0,10);
    });
    
    _MoviesService.getTrending("tv").subscribe((data)=>{
      this.trendingTv = data.results.slice(0,10);
    });

    _MoviesService.getTrending("person").subscribe((data)=>{
      this.trendingPeople = data.results.slice(0,10);
    });

   }


  ngOnInit(): void {
  }

}
