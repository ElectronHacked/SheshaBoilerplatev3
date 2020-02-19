/**
import { IDispatchable } from './../models/dispatchable.d';
 * This is our own custom `react-calendar-timeline` type definition.
 * We are adding new interfaces and modifying the existing ones. I had an issue with the one I downloaded
 * from https://github.com/DefinitelyTyped/DefinitelyTyped because it some definition wrong. But I did use it,
 * though with some minor tweaks
 */

/// <reference types="react"/>

declare module 'react-calendar-timeline' {
  export interface TimelineKeys {
    groupIdKey: string;
    groupTitleKey: string;
    itemIdKey: string;
    itemTitleKey: string;
    itemGroupKey: string;
    itemTimeStartKey: string;
    itemTimeEndKey: string;
  }

  // Original types
  export interface TimelineGroup {
    id: number;
    title: React.ReactNode;
    rightTitle?: React.ReactNode;

    /**
     * The library does not have a way to specify which row has been selected. So, as a hack, I'm introducing this
     * field so that I can use `groupRenderer` to manipulate how the row looks when it's marked as selected. The idea
     * is just to add a class `selected` and style it
     */
    selected?: boolean;
  }

  export interface TimelineItem {
    id: number;
    group: number;
    title?: React.ReactNode;
    start_time: any;
    end_time: any;
    canMove?: boolean;
    canResize?: boolean | 'left' | 'right' | 'both';
    canChangeGroup?: boolean;
    className?: string;
    itemProps?: any;
  }

  export interface TimelineContext {
    visibletimeStart: number;
    visibleTimeEnd: number;
    timelineWidth: number;
    canvasTimeStart: number;
    canvasTimeEnd: number;
  }

  export interface Dimensions {
    collisionLeft: number;
    collisionWidth: number;
    height: number;
    isDragging: number;
    left: number;
    order: number;
    originalLeft: number;
    stack: number;
    top: number;
    width: number;
  }

  export interface DragStartCoords {
    x: number;
    y: number;
  }

  export interface ItemContext {
    dimensions: Dimensions;
    useResizeHandle: boolean;
    title: string;
    canResizeLeft: boolean;
    canResizeRight: boolean;
    selected: boolean;
    dragging: boolean;
    dragStart: DragStartCoords;
    dragTime: number;
    dragGroupDelta: number;
    resizing: boolean;
    resizeEdge: 'left' | 'right';
    resizeStart: number;
    resizeTime: number;
    width: boolean;
  }

  export interface TimelineTimeSteps {
    second: number;
    minute: number;
    hour: number;
    day: number;
    month: number;
    year: number;
  }

  export interface TimelineHeaderLabelFormat {
    yearShort: string;
    yearLong: string;
    monthShort: string;
    monthMedium: string;
    monthMediumLong: string;
    monthLong: string;
    dayShort: string;
    dayLong: string;
    hourShort: string;
    hourMedium: string;
    hourMediumLong: string;
    hourLong: string;
    time: string;
  }

  export interface ItemRendererProps {
    item: TimelineItem;
    timelineContext: TimelineContext;
    itemContext: ItemContext;
    getItemProps: (...props) => any;
    getResizeProps: (...props) => any;
  }

  export interface GroupRendererProps {
    group: TimelineGroup;
    isRightSidebar: boolean;
  }

  //#region Timeline Headers// @ts-ignore
  export const TimelineHeaders: React.FC<any>;
  export const SidebarHeader: React.FC<any>;
  export const DateHeader: React.FC<any>;
  //#endregion

  export interface ReactCalendarTimelineProps {
    groups: TimelineGroup[];
    items: TimelineItem[];
    keys?: {
      groupIdKey: string;
      groupTitleKey: string;
      itemIdKey: string;
      itemTitleKey: string;
      itemGroupKey: string;
      itemTimeStartKey: string;
      itemTimeEndKey: string;
    };
    defaultTimeStart?: any;
    defaultTimeEnd?: any;
    visibleTimeStart?: any;
    visibleTimeEnd?: any;
    selected?: number[];
    sidebarWidth?: number;
    sidebarContent?: React.ReactNode;
    rightSidebarWidth?: number;
    rightSidebarContent?: React.ReactNode;
    dragSnap?: number;
    minResizeWidth?: number;
    stickyOffset?: number;
    stickyHeader?: boolean;
    headerRef?: any;
    lineHeight?: number;
    headerLabelGroupHeight?: number;
    headerLabelHeight?: number;
    itemHeightRatio?: number;
    minZoom?: number;
    maxZoom?: number;
    clickTolerance?: number;
    canMove?: boolean;
    canChangeGroup?: boolean;
    canResize?: boolean | 'left' | 'right' | 'both';
    useResizeHandle?: boolean;
    showCursorLine?: boolean;
    stackItems?: boolean;
    traditionalZoom?: boolean;
    itemTouchSendsClick?: boolean;
    timeSteps?: TimelineTimeSteps;
    onItemMove?(itemId: number, dragTime: number, newGroupOrder: number): any;
    onItemResize?(itemId: number, newResizeEnd: number, edge: 'left' | 'right'): any;
    onItemSelect?(itemId: number, e: any, time: number): any;
    onItemClick?(itemId: number, e: any, time: number): any;
    onItemDoubleClick?(itemId: number, e: any, time: number): any;
    onCanvasClick?(groupId: number, time: number, e: any): any;
    onCanvasDoubleClick?(group: TimelineGroup, time: number, e: any): any;
    onCanvasContextMenu?(group: TimelineGroup, time: number, e: any): any;
    onZoom?(timelineContext: TimelineContext): any;
    moveResizeValidator?(action: 'move' | 'resize', itemId: number, time: number, resizeEdge: 'left' | 'right'): any;
    headerLabelFormats?: TimelineHeaderLabelFormat;
    subHeaderLabelFormats?: TimelineHeaderLabelFormat;
    onTimeChange?(
      visibleTimeStart: number,
      visibleTimeEnd: number,
      updateScrollCanvas: (start: number, end: number) => void
    ): any;
    onTimeInit?(canvasTimeStart: number, canvasTimeEnd: number): any;
    onBoundsChange?(canvasTimeStart: number, canvasTimeEnd: number): any;
    itemRenderer?: (props: ItemRendererProps) => React.ReactElement<{}>;
    groupRenderer?: (props: GroupRendererProps) => React.ReactElement<{}>;
    minimumWidthForItemContentVisibility?: number;
    children?: any;
  }

  export const defaultHeaderLabelFormats: TimelineHeaderLabelFormat;
  export const defaultSubHeaderLabelFormats: TimelineHeaderLabelFormat;

  let ReactCalendarTimeline: React.ClassicComponentClass<ReactCalendarTimelineProps>;
  export default ReactCalendarTimeline;
}
