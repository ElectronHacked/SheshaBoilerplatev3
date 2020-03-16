export interface IFlagsState<
  ProgressFlags extends string,
  SucceededFlags extends string,
  FailedFlags extends string,
  ActionedFlags extends string
> {
  readonly isInProgress?: { [key in ProgressFlags]?: boolean };
  readonly succeeded?: { [key in SucceededFlags]?: boolean };
  readonly failed?: { [key in FailedFlags]?: boolean };
  readonly actioned?: { [key in ActionedFlags]?: boolean };
}
