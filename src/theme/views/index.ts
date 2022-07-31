import { Theme, Treatment } from '../../@types';
import { control as fontControl, t_serif, t_serif_2 } from '../font';
import { control as paletteControl } from '../palette';

const WEBLAB_NAME = 'view-theme' as const;

export const control: Treatment<Theme> = {
  control: true,
  id: WEBLAB_NAME + 'control-group',
  treatment: false,
  weblabName: WEBLAB_NAME,
  meta: {
    theme: {
      font: fontControl.meta!.font,
      palette: paletteControl.meta!.palette,
      treatmentId: WEBLAB_NAME + 'control-group'
    }
  }
} as const;

export const ViewThemeTreatments: readonly Treatment<Theme>[] = [
  control
] as const;
