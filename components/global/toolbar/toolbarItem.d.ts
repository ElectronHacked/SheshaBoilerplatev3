export default interface IToolbarItem {
    title: string;
    icon?: string;
    onClick?: (args: any) => void;
    visible?: () => bool;
}