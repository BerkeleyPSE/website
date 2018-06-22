import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';

export const iE = isEmpty;
export const iU = isUndefined;

export const isNotValid = x => iU(x) || iE(x);
export const isValid = x => !isNotValid(x);
