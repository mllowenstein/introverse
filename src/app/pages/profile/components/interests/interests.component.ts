import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SimService } from '@core/services/sim.service';
import { Logger } from '@logger';

const log = new Logger('SkillsComponentLogger');

@Component({
  selector: 'remoteink-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent {
  @Output() updating: EventEmitter<any> = new EventEmitter<any>();
  @Input() experiences!: any[];
  loading: boolean = false;

  constructor(private sims: SimService) {}

  ngOnInit(): void {
    log.info('resume component init');

  }
}
