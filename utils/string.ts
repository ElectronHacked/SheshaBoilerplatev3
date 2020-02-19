import { IndexColumnDataType } from 'shesha';

/**
 * Returns the dataType of a given value
 * @param value - the value to check against
 * @returns IndexColumnDataType
 */
export const getIndexTableColumnDataType = (value: any): IndexColumnDataType => {
  if (typeof value === 'boolean') return 'boolean';
  else if (!isNaN(value)) return 'number';
  else if (Date.parse(value)) return 'date';
  else if (typeof value === 'string') return 'string';

  return 'other';
};
