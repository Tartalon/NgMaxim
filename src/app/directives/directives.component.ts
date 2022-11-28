import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  showSecret = true;
  log: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  onToggleDetailes() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
