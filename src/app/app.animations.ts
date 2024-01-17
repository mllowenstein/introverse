import { style, group, query, trigger, animate, transition } from '@angular/animations';

/**
 * Author: Michael Lowenstein
 * Date: September 2024
 */

/** inter-page navigation animations */
export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);

/** intra-page navigation animations */
export const sectionTransition = trigger('sectionTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);

/** dialog state transition animations */
export const dialogStateTransition = trigger('dialogStateTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);

/** form-submission animations */
export const formSubmission = trigger('formSubmission', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))], { optional: true }),
      query(':leave', [animate('0.3s ease-in-out', style({ transform: 'scale3d(0, 0, 0)' }))], { optional: true }),
    ]),
  ]),
]);
