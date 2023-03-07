import { Injectable } from '@angular/core';
import { Apollo, gql} from 'apollo-angular';
import {BehaviorSubject} from "rxjs"
import {take, tap} from "rxjs/operators"
import { Character, DataResponse, Episode } from '../interface/data.interfaces';

const QUERY = gql`


  {
    episodes {
      results{
        name
        episode
      }
    }
    characters {
     
      results {
        id
        name
        species
        status
        gender
        origin
        image
      }
    }

  
  }
`

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private episodesSubject = new BehaviorSubject<Episode[]>([])
  episodes$ = this.episodesSubject.asObservable

  private charactersSubject = new BehaviorSubject<Character[]>([])
  characters$ = this.charactersSubject.asObservable



  constructor(private apollo: Apollo) {
    this.getDataAPI()
  }

  private getDataAPI():void{
    this.apollo.watchQuery<DataResponse>({
      query: QUERY

    }).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {characters, episodes} = data
        this.episodesSubject.next(episodes.result)
        this.charactersSubject.next(characters.result)
        
      })
    ).subscribe()
  }
}
