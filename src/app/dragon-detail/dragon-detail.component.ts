import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  loadingIndicator: boolean;
  history = new FormControl('');
  type = new FormControl('');
  name = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return 'You must enter a valid name';
  }

  constructor(
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private location: Location
  ) { }

  getDragon(): void {
    this.loadingIndicator = true;
    const slug = this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(slug).subscribe(dragon => {
      this.dragon = dragon;
      this.name.setValue(dragon.name);
      this.type.setValue(dragon.type);
      this.loadingIndicator = false;
    });
  }

  addHistory(history: string): void {
    if (history === '') {
      return;
    }
    if (!this.dragon.histories) {
      const histories: string[] = [];
      this.dragon.histories = histories;
    }
      this.dragon.histories.push(history);
      this.history.reset();
  }

  removeHistory(history: string): void {
    const index = this.dragon.histories.indexOf(history);
    if (index > -1) {
      this.dragon.histories.splice(index, 1);
    }
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

  saveDragon(name: string, type: string, history: string): void {
    this.dragon.name = name;
    this.dragon.type = type;

    if (!this.dragon.slug) {
      this.dragonService.addDragon(this.dragon)
      .subscribe(() => this.goBack());
    } else {
      this.dragonService.updateDragon(this.dragon)
      .subscribe(() => this.goBack());
    }
  }

}
