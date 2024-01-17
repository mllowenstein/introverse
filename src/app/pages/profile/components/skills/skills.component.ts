import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimService } from '@core/services/sim.service';
import { Logger } from '@logger';

const log = new Logger('SkillsComponentLogger');

@Component({
  selector: 'remoteink-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Output() updating: EventEmitter<any> = new EventEmitter<any>();
  @Input() skills!: any[];
  loading: boolean = false;

  constructor(private sims: SimService) {}

  ngOnInit(): void {
    log.info('skills component init');
  }
}
