import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent  implements OnInit{
  characters$ = this.dataSvc.characters$
  
  constructor(private dataSvc: DataService){

  }
  ngOnInit(): void{
    // this.dataSvc.getDataAPI()
  }

}
