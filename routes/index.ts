import { INavLink } from 'models';

export const ORDER_DETAILS_PAGE_URL = '/order-details';

export const CHANGE_PASSWORD_PAGE_URL = '/account/change-password';

export const RESET_PASSWORD_PAGE_URL = '/account/reset-password';

export const UPDATE_USER_PROFILE_PAGE_URL = '/update-profile';

export const FORGOT_PASSWORD_PAGE_URL = '/account/forgot-password';

export const MANUAL_REGISTER_PAGE_URL = '/register-manual';

export const USER_PROFILE_PAGE_URL = '/user-profile';

export const DASHBOARD_PAGE_URL = '/';

export const LOGIN_PAGE_URL = '/login';

export const DRAFTS_PAGE_URL = '/drafts';

export const INCIDENTS_PAGE_URL = '/incidents';

export const MAP_PAGE_URL = '/map';

export const INCIDENT_DETAILS_PAGE_URL = '/incident-details';

export const SERVICE_REQUESTS_PAGE_URL = '/service-requests';

export const DETAILS_VIEW_PAGE_URL = '/details';

export const SCHEDULED_EVENTS_PAGE_URL = '/scheduled-events';

export const USERS_INDEX_URL = '/users';
export const USERS_PERMISSION = 'pages:persons';

export const TEAMS_INDEX_URL = '/teams';
export const TEAMS_PERMISSION = 'pages:teams';

export const PROJECTS_INDEX_URL = '/projects';
export const PROJECTS_PERMISSION = 'pages:projects';

export const INSPECTION_ASSIGNMENTS_INDEX_URL = '/inspectionAssignments';
export const INSPECTION_ASSIGNMENTS_PERMISSION = 'pages:inspectionAssignments';
export const INSPECTION_ASSIGNMENTS_CREATE_PERMISSION = 'pages:inspectionAssignments:create';

export const INSPECTIONS_INDEX_URL = '/inspections';
export const INSPECTIONS_PERMISSION = 'pages:inspections';

export const AREAS_INDEX_URL = '/areas';
export const AREAS_PERMISSION = 'pages:areas';

export const ROLES_INDEX_URL = '/roles';
export const ROLES_PERMISSION = 'pages:shaRoles';

export const SETTINGS_URL = '/settings/overview';
export const APP_SETTINGS_PERMISSION = 'pages:applicationSettings';

export const SPECIAL_REDIRECT_LINKS = [];

export const appRoutes: INavLink[] = [
  {
    name: USERS_INDEX_URL,
    icon: 'idcard',
    displayName: 'Users',
    linkTo: USERS_INDEX_URL,
    permissionName: USERS_PERMISSION
  },
  {
    name: TEAMS_INDEX_URL,
    icon: 'team',
    displayName: 'Teams',
    linkTo: TEAMS_INDEX_URL,
    permissionName: TEAMS_PERMISSION
  },
  {
    name: PROJECTS_INDEX_URL,
    icon: 'project',
    displayName: 'Projects',
    linkTo: PROJECTS_INDEX_URL,
    permissionName: PROJECTS_PERMISSION
  },
  {
    name: AREAS_INDEX_URL,
    icon: 'gateway',
    displayName: 'Areas',
    linkTo: AREAS_INDEX_URL,
    permissionName: AREAS_PERMISSION
  },
  {
    name: INSPECTION_ASSIGNMENTS_INDEX_URL,
    icon: 'solution',
    displayName: 'Inspection Assignments',
    linkTo: INSPECTION_ASSIGNMENTS_INDEX_URL,
    permissionName: INSPECTION_ASSIGNMENTS_PERMISSION
  },
  {
    name: INSPECTIONS_INDEX_URL,
    icon: 'monitor',
    displayName: 'Inspections',
    linkTo: INSPECTIONS_INDEX_URL,
    permissionName: INSPECTIONS_PERMISSION
  },
  {
    name: ROLES_INDEX_URL,
    icon: 'apartment',
    displayName: 'Roles',
    linkTo: ROLES_INDEX_URL,
    permissionName: ROLES_PERMISSION
  }, 
];
