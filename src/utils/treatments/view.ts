import { Treatment } from '../../@types';

/**
 * TREATMENTS DICTATE THE FONT TREATMENT THE USER RECEIEVES IN THE CLIENT
 */

interface ViewTreatmentType extends Treatment {}

export const VIEW_TREATMENTS: readonly ViewTreatmentType[] = [
  {
    id: 'font-control',
    weblabName: 'font',
    control: true,
    treatment: false
  },
  {
    id: 'font-treatment-1',
    weblabName: 'font',
    control: false,
    treatment: 't1',
    meta: {
      fontFamily: 'placeholder'
    }
  }
] as const;
