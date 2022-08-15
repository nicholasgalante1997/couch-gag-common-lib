import { Palette, Treatment } from '../../@types';
import { _heller_base_colors } from '../../constants';

const WEBLAB_NAME = 'color' as const;

const { cathcart, dunbar, majorMajor, mcwatt, nately, yossarian } =
  _heller_base_colors;

function reduceColorArray() {
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

export const control_light: Treatment<Palette> = {
  control: true,
  id: WEBLAB_NAME + 'control-group-light',
  treatment: false,
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: '#fff',
      buttonColorOptions: [...reduceColorArray()],
      headingPrimaryColor: '#000',
      paragraphTextColor: '#000',
      headingSecondaryColor: '#000'
    }
  }
};

export const control_dark: Treatment<Palette> = {
  control: true,
  id: WEBLAB_NAME + 'control-group-dark',
  treatment: false,
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      buttonColorOptions: [...reduceColorArray()],
      headingPrimaryColor: '#fff',
      paragraphTextColor: '#fff',
      headingSecondaryColor: '#fff'
    }
  }
};

export const nately_light: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-nately-light',
  treatment: '-nately-light',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: nately.middleBluePurple,
      buttonColorOptions: [
        ...Object.keys(nately).map((k) => nately[k as keyof typeof nately])
      ],
      headingPrimaryColor: nately.linen,
      paragraphTextColor: nately.linen,
      headingSecondaryColor: nately.lavenderGray
    }
  }
};

export const nately_dark: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-nately-dark',
  treatment: '-nately-dark',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: nately.darkPurple,
      buttonColorOptions: [
        ...Object.keys(nately).map((k) => nately[k as keyof typeof nately])
      ],
      headingPrimaryColor: nately.linen,
      paragraphTextColor: nately.linen,
      headingSecondaryColor: nately.lavenderGray
    }
  }
};

export const cathcart_light: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-cathcart-light',
  treatment: '-cathcart-light',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: cathcart.blackCoral,
      buttonColorOptions: [
        ...Object.keys(cathcart).map(
          (k) => cathcart[k as keyof typeof cathcart]
        )
      ],
      headingPrimaryColor: nately.linen,
      paragraphTextColor: nately.linen,
      headingSecondaryColor: cathcart.oldLavender
    }
  }
};

export const cathcart_dark: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-cathcart-dark',
  treatment: '-cathcart-dark',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: cathcart.prussianBlue,
      buttonColorOptions: [
        ...Object.keys(cathcart).map(
          (k) => cathcart[k as keyof typeof cathcart]
        )
      ],
      headingPrimaryColor: nately.linen,
      paragraphTextColor: nately.linen,
      headingSecondaryColor: cathcart.romanSilver
    }
  }
};

export const dunbar_light_1: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-dunbar-light-1',
  treatment: '-dunbar-light-1',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: dunbar.flourescentBlue,
      buttonColorOptions: [
        ...Object.keys(dunbar).map((k) => dunbar[k as keyof typeof dunbar])
      ],
      headingPrimaryColor: dunbar.lightPink,
      paragraphTextColor: '#fff',
      headingSecondaryColor: '#fff'
    }
  }
};

export const dunbar_light_2: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-dunbar-light-2',
  treatment: '-dunbar-light-2',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: dunbar.lightCyan,
      buttonColorOptions: [
        ...Object.keys(dunbar).map((k) => dunbar[k as keyof typeof dunbar])
      ],
      headingPrimaryColor: dunbar.lightPink,
      paragraphTextColor: '#fff',
      headingSecondaryColor: '#fff'
    }
  }
};

export const dunbar_light_3: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-dunbar-light-3',
  treatment: '-dunbar-light-3',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: dunbar.lightPink,
      buttonColorOptions: [
        ...Object.keys(dunbar).map((k) => dunbar[k as keyof typeof dunbar])
      ],
      headingPrimaryColor: dunbar.lightCyan,
      paragraphTextColor: '#fff',
      headingSecondaryColor: '#fff'
    }
  }
};

export const dunbar_light_4: Treatment<Palette> = {
  control: false,
  id: WEBLAB_NAME + '-dunbar-light-4',
  treatment: '-dunbar-light-4',
  weblabName: WEBLAB_NAME,
  meta: {
    color: {
      backgroundColor: '#fff',
      buttonColorOptions: [
        ...Object.keys(dunbar).map((k) => dunbar[k as keyof typeof dunbar])
      ],
      headingPrimaryColor: dunbar.lightPink,
      paragraphTextColor: '#000',
      headingSecondaryColor: '#000'
    }
  }
};

export const ColorTreatments: readonly Treatment<Palette>[] = [
  control_light,
  control_dark,
  nately_light,
  nately_dark,
  cathcart_light,
  cathcart_dark,
  dunbar_light_1,
  dunbar_light_2,
  dunbar_light_3,
  dunbar_light_4
] as const;

export const getPaletteTreatmentKeys = () => ColorTreatments.map((t) => t.id);
