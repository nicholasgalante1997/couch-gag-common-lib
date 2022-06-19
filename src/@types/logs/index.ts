export type LogLevel = 'info' | 'debug' | 'warn' | 'error' | 'bright';
export type LogColorMapType = {
  [k in LogLevel]: (s: string) => string;
};
