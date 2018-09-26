import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';

const NEW_DRAGON_ROUTE = 'dragons/new';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.css']
})
export class DragonDetailComponent implements OnInit {

  @Input() dragon: Dragon;

  constructor(
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private location: Location
  ) { }

  getDragon(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(id).subscribe(dragon => this.dragon = dragon);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    if (this.route.routeConfig.path !== NEW_DRAGON_ROUTE) {
      this.getDragon();
    } else {
      this.dragon = new Dragon();
    }
  }

  saveDragon(): void {
    this.dragonService.updateDragon(this.dragon)
      .subscribe(() => this.goBack());
  }

  addDragon(): void {
    this.dragonService.addDragon(this.dragon)
      .subscribe(() => this.goBack());
  }

}
