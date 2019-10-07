// @flow
/* eslint no-unused-vars: 0 */
export { default } from './macro';

/**
 * Note: This is a workaround for flow type to work.
 * The exposed functions are not been used in macro library.
 */
export const loader = (filePath: string): [] => [];
