import { NumberOrString } from 'shesha';
import camelCase from 'camel-case';

/**
 * Returns the parameter value, from the url, by name
 * @param {string} name Parameter name
 * @param {string} url The url
 * @returns {string} The value of this parameter
 */
export const getParameterByName = (name: string, url?: string) => {
  const localUrl = !url ? window.location.href : url;
  const localName = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + localName + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(localUrl);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

//#endregion

const scrollHorizontally = (eventParam: any, element: any) => {
  const event = window.event || eventParam;
  const localElement = element;

  const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
  localElement.scrollLeft -= delta * 40;

  event.preventDefault();
};

export const horizontalMouseScroll = scrollableId => {
  try {
    const element = document.getElementById(scrollableId);
    if (!element) return;

    if (element.addEventListener) {
      // IE9, Chrome, Safari, Opera
      element.addEventListener('mousewheel', event => scrollHorizontally(event, element), false);

      // Firefox
      element.addEventListener('DOMMouseScroll', event => scrollHorizontally(event, element), false);
    } else {
      // IE 6/7/8
      // element.attachEvent('onmousewheel', event =>
      //   scrollHorizontally(event, element)
      // );
    }
  } catch (error) {
    console.log('horizontalMouseScroll error: ', error);
  }
};

/**
 * Compares two values and returns true if they have changed, else false
 * @param firstVal - the first value
 * @param secondVal - the second value
 */
export const compareValues = (firstVal: NumberOrString, secondVal: NumberOrString) => firstVal !== secondVal;

/**
 * Returns only digits from a given string
 * @param value - a string to extract digits from
 */
export const extractDigitsFromString = (value: string) => {
  const extracted = typeof value === 'string' && !!value.trim() ? value.match(/\d+/g) : '';

  return extracted ? extracted.join('') : '';
};

/**
 * The method returns a safely trimmed string
 * @param value - the string value to trim
 */
export const getSafelyTrimmedString = (value: string = '') => {
  if (!value || typeof value !== 'string') return '';

  return value.trim();
};

/**
 * Takes an object and returns all it's keys camel cased
 * @param obj = and object whose keys will be converted to camelCase
 */
export const camelCaseObjectKeys = (obj: object) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  const response = {};
  for (let index = 0; index < keys.length; index += 1) {
    const key = camelCase(keys[index]);
    response[key] = values[index];
  }

  return response;
};
