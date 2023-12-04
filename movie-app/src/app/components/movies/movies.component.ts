import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  public movies = [
    { poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbu_ypPeYDJLH5kC30_YpqnQOAR_fSR9CuQ&usqp=CAU', voteStatus : false},
    { poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJTkdPVAsp-i9GdusgSvj6LztRYsDQgzZkw&usqp=CAU' , voteStatus : false},
    { poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3Zc8nSze5S8vtzX49maUGoedcdli-2aj-Q&usqp=CAU' , voteStatus : false},
    { poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81ECkuVHwCnjzocjvGW57QGG2V3arxjkZHw&usqp=CAU', voteStatus : false}
  ]
  public vote(index:number):void{
    this.movies[index].voteStatus = ! this.movies[index].voteStatus;
  }
}
