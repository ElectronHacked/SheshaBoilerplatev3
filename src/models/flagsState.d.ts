export interface IFlagsState<
  ProgressFlags extends string,
  SucceededFlags extends string,
  ErrorFlags extends string,
  ActionedFlags extends string
> {
  readonly isInProgress?: { [key in ProgressFlags]?: boolean };
  readonly succeeded?: { [key in SucceededFlags]?: boolean };
  readonly error?: { [key in ErrorFlags]?: boolean };
  readonly actioned?: { [key in ActionedFlags]?: boolean };
}
