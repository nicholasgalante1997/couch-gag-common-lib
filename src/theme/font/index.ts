import { Treatment, Font } from '../../@types';

const WEBLAB_NAME = 'font' as const;

export const control: Treatment<Font> = {
  control: true,
  id: WEBLAB_NAME + '-control-group',
  treatment: false,
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Poppins'
      },
      fallback: 'sans-serif'
    } as Font
  }
} as const;

export const t_serif: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-serif-group',
  treatment: 1,
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Newsreader'
      },
      fallback: 'serif'
    } as Font
  }
};

export const t_serif_2: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-serif-group-2',
  treatment: 2,
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Neuton'
      },
      fallback: 'serif'
    } as Font
  }
};

export const FontTreatments: readonly Treatment<Font>[] = [
  control,
  t_serif,
  t_serif_2
] as const;
