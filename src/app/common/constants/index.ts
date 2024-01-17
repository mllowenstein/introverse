import { AppError } from '@common/models';

export const FULLNAME: string = 'Michael Lowenstein';
export const EMAIL: string = 'mlo2gs@remoteinked.net';
export const LINKEDIN: string = 'https://www.linkedin.com/in/mlo2gs';
export const CALENDLY: string = 'https://calendly.com/mllowenstein';

export const TAB = 9;

export const ERR_CLASS: { [key: string]: string } = {
  auth: 'UNAUTHORIZED',
  badreq: 'BAD REQUEST',
  forbid: 'FORBIDDEN',
  gen: 'GENERAL',
  nores: 'NOT FOUND',
  permit: 'NOT ALLOWED',
  rate: 'RATE-LIMIT',
  server: 'SERVER ERROR',
  unknown: 'UNKNOWN',
};

export const UNKNOWN_ERROR: AppError = {
  message: 'An unexpected error occurred. Refresh the application?',
  header: 'Error Notification',
  type: 'UNKNOWN',
};

export const AUTH_ERROR: AppError = {
  message: "An unexpected error occurred. You'll need to log in before continuing.",
  header: 'Error Notification',
  type: 'UNAUTHORIZED',
};

export const BADREQ_ERROR: AppError = {
  message: 'An unexpected error occurred. Refresh the application?',
  header: 'Error Notification',
  type: 'BAD REQUEST',
};

export const FORBID_ERROR: AppError = {
  message: "An unexpected error occurred. You'll need to log in before continuing.",
  header: 'Error Notification',
  type: 'FORBIDDEN',
};

export const NORES_ERROR: AppError = {
  message:
    'An unexpected error occurred. After refreshing the application,\n' +
    'contact support@peloton.com if the error persists.',
  header: 'Error Notification',
  type: 'NOT FOUND',
};

export const PERMIT_ERROR: AppError = {
  message:
    'An unexpected error occurred. After refreshing the application,\n' +
    'contact support@peloton.com if the error persists.',
  header: 'Error Notification',
  type: 'NOT ALLOWED',
};

export const RATE_ERROR: AppError = {
  message: 'An unexpected error occurred. Wait 30 ' + 'seconds before refreshing the application?',
  header: 'Error Notification',
  type: 'RATE-LIMIT',
};

export const SERVER_ERROR: AppError = {
  message:
    'An unexpected error occurred. After refreshing the application,\n' +
    'contact support@peloton.com if the error persists.',
  header: 'Error Notification',
  type: 'SERVER',
};

export const GEN_ERROR: AppError = {
  message: 'An unexpected error occurred. Refresh the application?',
  header: 'Error Notification',
  type: 'ERROR',
};
