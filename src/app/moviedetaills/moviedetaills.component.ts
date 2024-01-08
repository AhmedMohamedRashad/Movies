import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetaills',
  templateUrl: './moviedetaills.component.html',
  styleUrls: ['./moviedetaills.component.scss']
})
export class MoviedetaillsComponent implements OnInit {
  id:string = '';
  imgPrefix:string = "https://image.tmdb.org/t/p/w500/"
  movieDetails:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) {
    this.id = _ActivatedRoute.snapshot.params['id'];
    _MoviesService.getMovieDetails(this.id).subscribe((data)=>{
      this.movieDetails = data;
      
    });
   }

  ngOnInit(): void {
  }

}
