import deepmerge from 'deepmerge';
import isEqual from 'fast-deep-equal';
import areEqual from 'react-fast-compare';

export {
  deepmerge,
  isEqual, // for normal objects
  areEqual, // specific to React.memo
};
