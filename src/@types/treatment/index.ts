export interface Treatment {
  id: string;
  weblabName: string;
  control: boolean;
  treatment: boolean | number | string;
  meta?: {
    [x: string]: any;
  };
}
