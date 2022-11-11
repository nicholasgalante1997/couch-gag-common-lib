export enum MetricType {
  PAGE_VIEW = 'page-view',
  STORY_VIEW = 'story-view',
  BUTTON_CLICK = 'button-click',
  SHARE = 'share',
  ERROR = 'error',
  NETWORK_CALL = 'http-call'
}

export interface IMetric<T extends MetricType> {
  metricName: T;
  subfield: string;
  target: string;
  value: 0 | 1;
};

export class Metric<T extends MetricType> implements IMetric<T> {
  metricName: T;
  subfield: string;
  target: string;
  value: 0 | 1;

  constructor(
    metricName: T,
    subfield: string,
    target: string,
    value: 0 | 1,
  ) {
    this.metricName = metricName;
    this.subfield = subfield;
    this.target = target;
    this.value = value;
  }

  parseMetricQueryParams(){
    return `?metric=${this.metricName}&subfield=${this.subfield}&target=${this.target}&value=${this.value}`;
  }
}
