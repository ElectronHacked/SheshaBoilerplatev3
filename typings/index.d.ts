// import { Moment } from 'moment';
declare module 'ims-types' {
  export type ImsMouseClickEventTarget =
    | 'clearEventTargetTarget'
    | 'clickEventTargetTable'
    | 'clickEventTargetMap'
    | 'clickEventTargetDesktopNotification';

  export type ImsMouseMoveEventTarget = 'moveEventTargetTargetTable' | 'moveEventTargetTargetMap';

  export type IncidentInteractiveModes = 'create' | 'edit' | 'displayInfo' | '';

  export type LatestSelectedItemOption = 'incident' | 'resource' | '';

  export type IncidentStatuses =
    | 'merged'
    | 'cancelled'
    | 'open'
    | 'cancelled interactions merged'
    | 'closed'
    | 'in progress'
    | 'cancelled invalid';
}

declare module 'shesha' {
  export type NumberOrString = number | string;

  export type IncidentFormKeys =
    | 'channels'
    | 'requestTypes'
    | 'address'
    | 'description'
    | 'firstName'
    | 'lastName'
    | 'mobileNumber'
    | 'emailAddress';

  export type IndexColumnDataType = 'string' | 'number' | 'date' | 'datetime' | 'time' | 'boolean' | 'other';

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

  // export type ColumnFilter = [] | string | number | Moment;
}
