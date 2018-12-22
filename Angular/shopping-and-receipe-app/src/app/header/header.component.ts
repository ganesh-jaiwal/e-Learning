import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class AppHeader {
  @Output() onSelectFeature = new EventEmitter<string>();
  onSelect(feature) {
    this.onSelectFeature.emit(feature);
  }
}
