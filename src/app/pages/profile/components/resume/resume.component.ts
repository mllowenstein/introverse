import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SimService } from '@core/services/sim.service';
import { Logger } from '@logger';

const log = new Logger('SkillsComponentLogger');

@Component({
  selector: 'remoteink-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  @Output() updating: EventEmitter<any> = new EventEmitter<any>();
  @Input() resume!: any;
  loading: boolean = false;

  constructor(private sims: SimService) {}

  async ngOnInit(): Promise<void> {
    log.info('resume component init');
    await this.sims.simPageLoad(this.loading);
  }
}
