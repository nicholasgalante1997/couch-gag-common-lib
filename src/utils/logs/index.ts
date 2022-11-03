import { LogLevel } from '../../@types';

export function log(logLevel: LogLevel, msg: string) {
  console.log(`[${Date.now()}][${logLevel.toUpperCase()}] ${msg}\n`);
}
