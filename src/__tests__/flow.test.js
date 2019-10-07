// @flow
import { loader } from '../index';

// $FlowFixMe number [1] is incompatible with  string
export const loaderWithNumber = loader(3);
export const loaderWithString = loader('./fixtures/data.csv');
