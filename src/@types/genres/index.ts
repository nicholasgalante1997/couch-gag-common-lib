export type Genre =
  | 'genesis'
  | 'loathing'
  | 'beauty'
  | 'governance'
  | 'media'
  | 'shadow'
  | 'rock'
  | 'glory'
  | 'drugs'
  | 'loss'
  | 'life'
  | 'colorado'
  | 'no-name'
  | 'philosophy/violence'
  | 'cthulhu'
  | 'catch-22'
  | 'economics'
  | 'reminiscence';
export const ORIGIN_ARRAY: readonly Genre[] = ['genesis', 'beauty'] as const;
export const GOVERNANCE_ARRAY: readonly Genre[] = [
  'governance',
  'media',
  'shadow',
  'no-name',
  'philosophy/violence'
] as const;
export const CULT_ARRAY: readonly Genre[] = [
  'loathing',
  'no-name',
  'philosophy/violence',
  'cthulhu',
  'catch-22'
] as const;

const ICON_MAP = {
  genesis: '',
  cthulhu: ''
};
