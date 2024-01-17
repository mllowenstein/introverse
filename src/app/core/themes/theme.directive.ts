import {
  OnInit,
  Directive,
  OnDestroy,
  ElementRef
} from '@angular/core';
import { ThemeService } from './theme.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { Theme } from './symbols';

@Directive({
  selector: '[theme]'
})
export class ThemeDirective implements OnInit, OnDestroy {
  private _destroy$ = new Subject();

  constructor(private _elemref: ElementRef,
  private _themes: ThemeService) { }

  ngOnInit() {
    const active = this._themes.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }

    this._themes.themeChange
      .pipe(takeUntil(this._destroy$))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  updateTheme(theme: Theme) {
    // project properties onto the element
    for (const key in theme.properties) {
      this._elemref.nativeElement.style.setProperty(key, theme.properties[key]);
    }
    // remove old theme
    for (const name of this._themes.theme) {
      this._elemref.nativeElement.classList.remove(`${name}-theme`);
    }
    // alias element with theme name
    this._elemref.nativeElement.classList.add(`${theme.name}-theme`);
  }
}
