import { createContext } from 'react';
import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/col';

interface IDesignContext {
  size?: 'large' | 'default' | 'small';
  formItemLayout?: FormProps;
  dateFormat?: string;
  monthFormat?: string;
  accountFormCols?: ColProps;
}

export const defaultDesignContext: IDesignContext = {
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

export const DesignContext = createContext<IDesignContext>(defaultDesignContext);
