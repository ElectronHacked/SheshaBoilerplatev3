const camelCase = require('camel-case');
const BASE_URL = 'http://ethekwinibackend.boxfusion.co.za';
const ROOT_PATH = './api';

const API_LIST = [
  'Account',
  'DataTable',
  'Otp',
  'TokenAuth',
  'Person',
  'InspectionBatchAssignment',
  'InspectionProject',
  'InspectionTeam',
  'PropertyInspection',
  'PropertyGroup',
  'Area',
  'ShaRole',
  'ShaRoleAppointedPerson',
  'User',
  'Ldap',
  'EmailSender',
  'Clickatell',
  'UtilManSettings',
  'MobileDevice',
  'ReferenceList',
  'Session',
];

function generateFetcher() {
  let apiObj = {};

  API_LIST.forEach(key => {
    const camelCasedName = camelCase(key);

    apiObj[`${camelCasedName}Api`] = {
      output: `${ROOT_PATH}/${camelCasedName}.tsx`,
      url: `${BASE_URL}/swagger/service:${key}/swagger.json`,
    };
  });

  return apiObj;
}

module.exports = {
  ...generateFetcher(),
};
