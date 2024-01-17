import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy } from '@core/index';

@UntilDestroy()
@Component({
  selector: 'remoteink-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor(private router: Router) {}

  ngOnInit() {
    // Automatically close side menu on screens > sm breakpoint
    // this.media
    //   .asObservable()
    //   .pipe(
    //     filter((changes: any[]) => changes.some((change) => change.mqAlias !== 'xs' && change.mqAlias !== 'sm')),
    //     untilDestroyed(this),
    //   )
    //   .subscribe(() => {
    //     this.sidenav.close();
    //   });
    this.defaultNav();
  }

  closeNav(): void {
    this.sidenav.close();
  }

  defaultNav(): void {
    this.router.navigate(['/home']);
  }
}
