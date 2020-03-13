// Put project specific types up in here
declare module 'custom-types' {
  export type NumberOrString = number | string;

  export type IndexColumnFilterOption =
    | 'contains'
    | 'startsWith'
    | 'endsWith'
    | 'equals'
    | 'lessThan'
    | 'greaterThan'
    | 'between'
    | 'before'
    | 'after';
}
