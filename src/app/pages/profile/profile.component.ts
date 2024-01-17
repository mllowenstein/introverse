import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SimService } from '@core/services';
import { sectionTransition } from '@app/app.animations';
import { ProfileService, NavigateService } from '@core/services';
import { ExperienceComponent, InterestsComponent, SkillsComponent, ResumeComponent } from './components';
import { Logger } from '@logger';

const log = new Logger('ProfilePageLogger');

@Component({
  selector: 'remoteink-profile',
  animations: [sectionTransition],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('experience') experience!: ExperienceComponent;
  @ViewChild('experience') interests!: InterestsComponent;
  @ViewChild('skills') skills!: SkillsComponent;
  @ViewChild('resume') resume!: ResumeComponent;
  loading: boolean = false;
  router: Router;

  constructor(
    private sims: SimService,
    public service: ProfileService,
    private navigator: NavigateService,
  ) {
    this.router = inject(Router);
  }

  async ngOnInit(): Promise<void> {
    log.info('profile page init...');
    await this.sims.simPageLoad(this.loading);
  }

  navToSection(section: string): void {
    this.navigator.navigate(section);
  }

  getSectionData(section: string): void {
    this.service.getSectionData(section);
  }
}
