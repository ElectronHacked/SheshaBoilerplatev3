export interface INavLink {
  name: string;
  icon: string;
  linkTo: string;
  displayName: string;
  hide?: boolean;
  children?: INavLink[];
  permissionName?: string; // name of the permission required to view this link
}
