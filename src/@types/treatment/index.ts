export interface Treatment<T = {}> {
  id: string;
  weblabName: string;
  control: boolean;
  treatment: boolean | number | string;
  meta?: {
    [x: string]: T;
  };
}
