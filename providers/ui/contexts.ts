import { createContext } from 'react';
import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/col';
import { IFlagsState, IFlagsSetters } from 'models';

export type ControlSize = 'large' | 'default' | 'small';

export type IFlagProgressFlags = '__DEFAULT__';
export type IFlagSucceededFlags = '__DEFAULT__';
export type IFlagFailedFlags = '__DEFAULT__';
export type IFlagActionedFlags = '__DEFAULT__';

export interface IUiStateContext
  extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
  size?: ControlSize;
  formItemLayout?: FormProps;
  dateFormat?: string;
  monthFormat?: string;
  accountFormCols?: ColProps;
}

export interface IUiActionsContext
  extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
  setControlsSize: (size: ControlSize) => void;
}

export const UI_CONTEXT_INITIAL_STATE: IUiStateContext = {
  size: 'default',
  formItemLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  },
  dateFormat: 'DD-MM-YYYY',
  monthFormat: 'MM-YYYY',
  accountFormCols: {
    xs: { span: 14, offset: 5 },
    sm: { span: 12, offset: 6 },
    md: { span: 10, offset: 7 },
    lg: { span: 8, offset: 8 },
    xl: { span: 6, offset: 9 },
    xxl: { span: 4.5, offset: 10.5 },
  },
};

export const UiStateContext = createContext<IUiStateContext>(UI_CONTEXT_INITIAL_STATE);

export const UiActionsContext = createContext<IUiActionsContext>(undefined);
