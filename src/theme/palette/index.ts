import { Palette, Treatment } from '../../@types';
import {
  _heller_base_colors_,
  _lasercat_,
  _coolors_extension_pack_,
  _coolors_gradient_palettes_pack_
} from '../../constants';

const WEBLAB_NAME = 'color-' as const;

const {
  defaults,
  bullwinkle,
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

export const yossarian_vibrant_mix: Treatment<Palette> = {
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

export const hoenn_elite_four: Treatment<Palette> = {
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

export const bullwinkle_dark_1: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'bullwinkle-dark-1',
  treatment: 'bullwinkle-dark-1',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: bullwinkle.cambridge_blue,
      backgroundComplimentColor: bullwinkle.light_goldenrod_yellow,
      backgroundTertiaryColor: '#7e667a',
      buttonColorOptions: Object.values(bullwinkle),
      headingPrimaryColor: bullwinkle.light_goldenrod_yellow,
      paragraphTextColor: defaults.base_white,
      headingSecondaryColor: bullwinkle.laurel_green
    }
  }
};

export const soft_woodland_mix: Treatment<Palette> = {
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

export const hard_grassland_mix: Treatment<Palette> = {
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

export const volcano_pure: Treatment<Palette> = {
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

export const evening_wear_mix: Treatment<Palette> = {
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

export const banned_sunday_mix: Treatment<Palette> = {
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

export const lasercat_mix: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + 'treatment-lasercat',
  treatment: 'treatment-lasercat',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: _lasercat_.prp_dark_2,
      backgroundComplimentColor: _lasercat_.pk_light,
      backgroundTertiaryColor: _lasercat_.bl_light,
      buttonColorOptions: Object.values(_lasercat_),
      headingPrimaryColor: _lasercat_.pk_lightest,
      paragraphTextColor: [defaults.base_white, _lasercat_.pk_mid],
      headingSecondaryColor: _lasercat_.prp_light
    }
  }
};

export const ColorTreatments: readonly Treatment<Palette>[] = [
  hoenn_elite_four,
  yossarian_vibrant_mix,
  bullwinkle_dark_1,
  soft_woodland_mix,
  hard_grassland_mix,
  evening_wear_mix,
  volcano_pure,
  banned_sunday_mix
] as const;

export const getPaletteTreatmentKeys = () => ColorTreatments.map((t) => t.id);
