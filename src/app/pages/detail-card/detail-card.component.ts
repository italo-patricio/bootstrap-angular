import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from '../../models/character.model';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

  @Input()
  item?: CharacterModel;

  constructor() { }

  ngOnInit(): void {
  }

  str2DateFormated() {
    if(!this.item?.dateOfBirth) return '';
    return this.item!.dateOfBirth?.replace(/(\d{2})-(\d{2})-(\d{4})/, "$1/$2/$3");
  }
}
