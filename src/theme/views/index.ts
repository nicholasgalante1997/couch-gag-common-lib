import { Theme, Treatment } from '../../@types';
import * as fontLab from '../font';
import * as colorLab from '../palette';

const WEBLAB_NAME = 'view-theme-' as const;

const { ColorTreatments: c } = colorLab;
const { FontTreatments: f } = fontLab;

function reduceSerializedSubviewThemeTreatments() {
  const ta: Treatment<Theme>[] = [];
  for (const ctr of c) {
    for (const ftr of f) {
      ta.push({
        control: (ctr.control && ftr.control) as boolean,
        id: WEBLAB_NAME + ctr.id + '&' + ftr.id,
        treatment:
          ctr.control && ftr.control
            ? false
            : ctr.treatment + '-' + ftr.treatment,
        weblabName: WEBLAB_NAME,
        meta: {
          theme: {
            font: ftr.meta!.font,
            palette: ctr.meta!.color,
            treatmentId: WEBLAB_NAME + ctr.id + '&' + ftr.id
          }
        }
      });
    }
  }
  return ta;
}

export const ViewThemeTreatments: readonly Treatment<Theme>[] =
  reduceSerializedSubviewThemeTreatments();
