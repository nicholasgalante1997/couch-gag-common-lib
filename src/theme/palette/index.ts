import { Palette, Treatment } from '../../@types';
import {
  _heller_base_colors_,
  _coolors_extension_pack_,
  _coolors_gradient_palettes_pack_
} from '../../constants';

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
} = _heller_base_colors_;

const { banned_sunday, evening_wear, hard_grassland, soft_woodland, volcano } =
  _coolors_extension_pack_;

export function reduceColorArray() {
  const reduced: string[] = [];
  const mashedObj = { ..._coolors_extension_pack_, ..._heller_base_colors_ };
  Object.keys(mashedObj).map((colorGroup) => {
    type TransientColorKey = keyof typeof mashedObj;
    Object.keys(mashedObj[colorGroup as TransientColorKey]).map((colorTag) => {
      const parentColorGroup = mashedObj[colorGroup as TransientColorKey];
      reduced.push(parentColorGroup[colorTag as keyof typeof parentColorGroup]);
    });
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
      backgroundColor: defaults.base_white,
      backgroundComplimentColor: mcwatt.canary,
      backgroundTertiaryColor: mcwatt.persian_green,
      buttonColorOptions: Object.values(mcwatt),
      headingPrimaryColor: mcwatt.persian_green,
      paragraphTextColor: defaults.base_black,
      headingSecondaryColor: mcwatt.space_cadet
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
      backgroundColor: majorMajor.green_sheen,
      backgroundComplimentColor: bullwinkle.light_goldenrod_yellow,
      backgroundTertiaryColor: majorMajor.majorvelous,
      buttonColorOptions: [
        ...Object.values(majorMajor),
        ...Object.values(cathcart)
      ],
      headingPrimaryColor: majorMajor.gainsboro,
      paragraphTextColor: defaults.base_white,
      headingSecondaryColor: majorMajor.piggy_pink
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
      backgroundColor: yossarian.soft_violet,
      backgroundComplimentColor: yossarian.dandelion,
      backgroundTertiaryColor: yossarian.fresh_grass,
      buttonColorOptions: Object.values(yossarian),
      headingPrimaryColor: yossarian.dandelion,
      paragraphTextColor: defaults.base_white,
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
      backgroundColor: mcwatt.persian_green,
      backgroundComplimentColor: mcwatt.canary,
      backgroundTertiaryColor: mcwatt.space_cadet,
      buttonColorOptions: [...Object.values(mcwatt), ...Object.values(nately)],
      headingPrimaryColor: mcwatt.canary,
      paragraphTextColor: nately.linen,
      headingSecondaryColor: mcwatt.flickr_pink
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
      backgroundColor: bullwinkle.cambridge_blue,
      backgroundComplimentColor: bullwinkle.light_goldenrod_yellow,
      backgroundTertiaryColor: bullwinkle.jet,
      buttonColorOptions: Object.values(bullwinkle),
      headingPrimaryColor: bullwinkle.light_goldenrod_yellow,
      paragraphTextColor: defaults.base_white,
      headingSecondaryColor: bullwinkle.laurel_green
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
      backgroundColor: dunbar.light_cyan,
      backgroundComplimentColor: dunbar.amaranth_purple,
      backgroundTertiaryColor: dunbar.light_pink,
      buttonColorOptions: Object.values(dunbar),
      headingPrimaryColor: dunbar.amaranth_purple,
      paragraphTextColor: defaults.base_black,
      headingSecondaryColor: dunbar.light_pink
    }
  }
};

export const treatment_soft_woodland: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-soft-woodland',
  treatment: 'treatment-soft-woodland',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: soft_woodland.eton_blue,
      backgroundComplimentColor: soft_woodland.pale_spring_bud,
      backgroundTertiaryColor: soft_woodland.morning_blue,
      buttonColorOptions: Object.values(soft_woodland),
      headingPrimaryColor: soft_woodland.dutch_white,
      paragraphTextColor: defaults.base_white,
      headingSecondaryColor: soft_woodland.pale_spring_bud
    }
  }
};

export const treatment_hard_grassland: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-hard-grassland',
  treatment: 'treatment-hard-grassland',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: hard_grassland.brunswick_green,
      backgroundComplimentColor: hard_grassland.laurel_green,
      backgroundTertiaryColor: hard_grassland.fern_green,
      buttonColorOptions: Object.values(hard_grassland),
      headingPrimaryColor: hard_grassland.timberwolf,
      paragraphTextColor: defaults.base_white,
      headingSecondaryColor: hard_grassland.laurel_green
    }
  }
};

export const treatment_volcano: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-volcano',
  treatment: 'treatment-volcano',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: volcano.copper_rose,
      backgroundComplimentColor: volcano.charcoal,
      backgroundTertiaryColor: volcano.cameo_pink,
      buttonColorOptions: Object.values(volcano),
      headingPrimaryColor: volcano.white,
      paragraphTextColor: volcano.white,
      headingSecondaryColor: volcano.pewter_blue
    }
  }
};

export const treatment_evening_wear: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-evening-wear',
  treatment: 'treatment-evening-wear',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: evening_wear.longer_lang_lavender,
      backgroundComplimentColor: evening_wear.midnight_eagle,
      backgroundTertiaryColor: evening_wear.prussian_blue,
      buttonColorOptions: Object.values(evening_wear),
      headingPrimaryColor: defaults.base_black,
      paragraphTextColor: defaults.base_white,
      headingSecondaryColor: evening_wear.prussian_blue
    }
  }
};

export const treatment_banned_sunday: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-banned-sunday',
  treatment: 'treatment-banned-sunday',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: banned_sunday.eton_blue,
      backgroundComplimentColor: banned_sunday.tea_green,
      backgroundTertiaryColor: banned_sunday.deep_space,
      buttonColorOptions: Object.values(banned_sunday),
      headingPrimaryColor: defaults.base_white,
      paragraphTextColor: defaults.base_white,
      headingSecondaryColor: banned_sunday.charcoal
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
  treatment_bullwinkle_dark_1,
  treatment_soft_woodland,
  treatment_hard_grassland,
  treatment_evening_wear,
  treatment_volcano,
  treatment_banned_sunday
] as const;

export const getPaletteTreatmentKeys = () => ColorTreatments.map((t) => t.id);
