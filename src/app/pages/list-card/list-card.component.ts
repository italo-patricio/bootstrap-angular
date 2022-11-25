import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterModel } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;
  modalRef?: BsModalRef;
  listCharacteres: Observable<CharacterModel[]> = new BehaviorSubject([]);
  itemSelected?: CharacterModel;

  constructor(private characterService: CharacterService,) {
    this.loadCharacters();
  }

  ngOnInit(): void { }

  loadCharacters() {
    this.listCharacteres = this.characterService.getAll()
  }

  navigateToDetail(item: CharacterModel) {
    this.itemSelected = item;
    this.childModal?.show();
  }
}
