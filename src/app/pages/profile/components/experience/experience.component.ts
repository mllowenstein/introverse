import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SimService } from '@core/services/sim.service';
import { Logger } from '@logger';

const log = new Logger('SkillsComponentLogger');

@Component({
  selector: 'remoteink-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Output() updating: EventEmitter<any> = new EventEmitter<any>();
  @Input() experiences!: any[];
  loading: boolean = false;

  constructor(private sims: SimService) {}

  ngOnInit(): void {
    log.info('experience component init');
  }
}
