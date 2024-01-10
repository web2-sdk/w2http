export type GenericFunction<R = unknown, P = any> = ((...args: P[]) => R);


export type DataType =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';