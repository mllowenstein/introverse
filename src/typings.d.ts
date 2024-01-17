/*
 * Extra typings definitions
 */

// hammerjs gesture support
declare module 'hammerjs';

// Allow .json files imports
declare module '*.json';

// SystemJS module definition
declare const module: NodeModule;
interface NodeModule {
  id: string;
}
