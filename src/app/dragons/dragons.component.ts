import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      response.items.map( i => { i.created_at = new Date(i.created_at);
    });
      this.dragons = response.items;
      this.loadingIndicator = false;
    });
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService.deleteDragon(dragon).subscribe();
    this.dragons = this.dragons.filter(d => d !== dragon);
  }

  editDragon(dragon: Dragon): void {
    this.router.navigate(['dragon/' + dragon.slug]);
  }

  constructor(
    private dragonService: DragonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDragons();
  }

}
