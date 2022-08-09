export enum MetricType {
  PAGE_VIEW = 'page-view',
  STORY_VIEW = 'story-view',
  BUTTON_CLICK = 'button-click',
  SHARE = 'share',
  ERROR = 'error'
}

export type Metric<T extends MetricType> = {
  metricName: T;
  subfield: string;
  value: 0 | 1;
};
