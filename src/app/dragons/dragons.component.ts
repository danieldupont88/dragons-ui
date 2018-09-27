import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];
  loadingIndicator: boolean;
  
  getDragons(): void {
    this.loadingIndicator = true;
    this.dragonService.getDragons().subscribe(response => { 
      response.items.map( i => { i.created_at = new Date(i.created_at)})
      this.dragons = response.items 
      this.loadingIndicator = false;
    });
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService.deleteDragon(dragon).subscribe();
  }

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragons();
  }

}
