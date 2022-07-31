import { Palette, Treatment } from '../../@types';

const WEBLAB_NAME = 'color' as const;

export const control: Treatment<Palette> = {
  control: true,
  id: WEBLAB_NAME + 'control-group',
  treatment: false,
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: '',
      buttonColorOptions: [''],
      headingPrimaryColor: '',
      paragraphTextColor: '',
      headingSecondaryColor: ''
    }
  }
};

export const ColorTreatments: readonly Treatment<Palette>[] = [
  control
] as const;
