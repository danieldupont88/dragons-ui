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

  getDragons(): void {
    this.dragonService.getDragons().subscribe(response => this.dragons = response.items);
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService.deleteDragon(dragon).subscribe();
  }

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.getDragons();
  }

}
