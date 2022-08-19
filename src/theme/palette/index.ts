import { Palette, Treatment } from '../../@types';
import { _heller_base_colors } from '../../constants';

const WEBLAB_NAME = 'color-' as const;

const {
  defaults,
  bullwinkle,
  cathcart,
  dunbar,
  majorMajor,
  mcwatt,
  nately,
  yossarian,
  hoenn
} = _heller_base_colors;

export function reduceColorArray() {
  const reduced: string[] = [];
  Object.keys(_heller_base_colors).map((colorGroup) => {
    type TransientColorKey = keyof typeof _heller_base_colors;
    Object.keys(_heller_base_colors[colorGroup as TransientColorKey]).map(
      (colorTag) => {
        const parentColorGroup =
          _heller_base_colors[colorGroup as TransientColorKey];
        reduced.push(
          parentColorGroup[colorTag as keyof typeof parentColorGroup]
        );
      }
    );
  });
  return reduced;
}

export const control_mcwatt_accent_light: Treatment<Palette> = {
  control: true,
  id: WEBLAB_NAME + 'control-group-mcwatt-accent-light',
  treatment: false,
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: defaults.baseWhite,
      backgroundComplimentColor: mcwatt.canary,
      backgroundTertiaryColor: mcwatt.persianGreen,
      buttonColorOptions: Object.values(mcwatt),
      headingPrimaryColor: mcwatt.persianGreen,
      paragraphTextColor: defaults.baseBlack,
      headingSecondaryColor: mcwatt.spaceCadet
    }
  }
};

export const treatment_major_major_blend: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-major-major-blend',
  treatment: 'treatment-major-major-blend',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: majorMajor.greenSheen,
      backgroundComplimentColor: majorMajor.gainsboro,
      backgroundTertiaryColor: majorMajor.majorvelous,
      buttonColorOptions: [
        ...Object.values(majorMajor),
        ...Object.values(cathcart)
      ],
      headingPrimaryColor: majorMajor.gainsboro,
      paragraphTextColor: defaults.baseWhite,
      headingSecondaryColor: majorMajor.piggyPink
    }
  }
};

export const treatment_yossarian_vibrant_mix: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-yoss-vibr-mix-sharp',
  treatment: 'yoss-vibr-mix-sharp',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: yossarian.softViolet,
      backgroundComplimentColor: yossarian.dandelion,
      backgroundTertiaryColor: yossarian.freshGrass,
      buttonColorOptions: Object.values(yossarian),
      headingPrimaryColor: yossarian.dandelion,
      paragraphTextColor: defaults.baseWhite,
      headingSecondaryColor: yossarian.charmander
    }
  }
};

export const treatment_nately_mcwatt_dim: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-nately-mcwatt-dim-mix',
  treatment: 'nately-mcwatt-dim-mix',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: mcwatt.persianGreen,
      backgroundComplimentColor: mcwatt.canary,
      backgroundTertiaryColor: mcwatt.spaceCadet,
      buttonColorOptions: [...Object.values(mcwatt), ...Object.values(nately)],
      headingPrimaryColor: mcwatt.canary,
      paragraphTextColor: nately.linen,
      headingSecondaryColor: mcwatt.flickrPink
    }
  }
};

export const treatment_hoenn_elite_four: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-hoenn-elite-four',
  treatment: 'treatment-hoenn-elite-four',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: hoenn.pupitar,
      backgroundComplimentColor: hoenn.ditto,
      backgroundTertiaryColor: hoenn.magby,
      buttonColorOptions: Object.values(hoenn),
      headingPrimaryColor: hoenn.bulbasaur,
      paragraphTextColor: nately.linen,
      headingSecondaryColor: hoenn.magby
    }
  }
};

export const treatment_bullwinkle_dark_1: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'bullwinkle-dark-1',
  treatment: 'bullwinkle-dark-1',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: bullwinkle.cambridgeBlue,
      backgroundComplimentColor: bullwinkle.lightGoldenrodYellow,
      backgroundTertiaryColor: bullwinkle.jet,
      buttonColorOptions: Object.values(bullwinkle),
      headingPrimaryColor: bullwinkle.lightGoldenrodYellow,
      paragraphTextColor: defaults.baseWhite,
      headingSecondaryColor: bullwinkle.laurelGreen
    }
  }
};

export const treatment_dunbar_light_skies: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-dunbar-light-skies',
  treatment: 'treatment-dunbar-light-skies',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: dunbar.lightCyan,
      backgroundComplimentColor: dunbar.amaranthPurple,
      backgroundTertiaryColor: dunbar.lightPink,
      buttonColorOptions: Object.values(dunbar),
      headingPrimaryColor: dunbar.amaranthPurple,
      paragraphTextColor: defaults.baseBlack,
      headingSecondaryColor: dunbar.lightPink
    }
  }
};

export const ColorTreatments: readonly Treatment<Palette>[] = [
  control_mcwatt_accent_light,
  treatment_major_major_blend,
  treatment_hoenn_elite_four,
  treatment_nately_mcwatt_dim,
  treatment_dunbar_light_skies,
  treatment_yossarian_vibrant_mix,
  treatment_bullwinkle_dark_1
] as const;

export const getPaletteTreatmentKeys = () => ColorTreatments.map((t) => t.id);
