import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];

  getDragons(): void {
    this.dragonService.getDragons().subscribe(response => {  console.log(response); this.dragons = response.items; });
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService.deleteDragon(dragon).subscribe();
    this.dragons = this.dragons.filter(d => d !== dragon);
  }

  constructor(
    private dragonService: DragonService
  ) { }

  ngOnInit() {
    this.getDragons();
  }

}
