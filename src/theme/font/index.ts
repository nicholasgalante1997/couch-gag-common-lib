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

export const oswald_sans_serif: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-oswald-sans-serif-group',
  treatment: 'oswald-sans-serif',
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Oswald'
      },
      fallback: 'sans-serif'
    } as Font
  }
} as const;

export const inter_sans_serif: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-inter-sans-serif-group',
  treatment: 'inter-sans-serif',
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Inter'
      },
      fallback: 'sans-serif'
    } as Font
  }
} as const;

export const ubuntu_sans_serif: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-ubuntu-sans-serif-group',
  treatment: 'ubuntu-sans-serif',
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Ubuntu'
      },
      fallback: 'sans-serif'
    } as Font
  }
} as const;

export const martel_serif: Treatment<Font> = {
  control: true,
  id: WEBLAB_NAME + '-treatment-martel-serif-group',
  treatment: 'martel-serif',
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Martel'
      },
      fallback: 'serif'
    } as Font
  }
} as const;

export const kreon_serif: Treatment<Font> = {
  control: true,
  id: WEBLAB_NAME + '-treatment-kreon-serif-group',
  treatment: 'kreon-serif',
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Kreon'
      },
      fallback: 'serif'
    } as Font
  }
} as const;

export const spectral_serif: Treatment<Font> = {
  control: true,
  id: WEBLAB_NAME + '-treatment-spectral-group',
  treatment: 'spectral-serif',
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Spectral'
      },
      fallback: 'serif'
    } as Font
  }
} as const;

export const sanchez_serif: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-sanchez-serif-group',
  treatment: 1,
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Sanchez'
      },
      fallback: 'serif'
    } as Font
  }
};

export const amiri_serif: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-amiri-serif-group',
  treatment: 1,
  weblabName: WEBLAB_NAME,
  meta: {
    font: {
      google: {
        family: 'Amiri'
      },
      fallback: 'serif'
    } as Font
  }
};

export const neuton_serif: Treatment<Font> = {
  control: false,
  id: WEBLAB_NAME + '-treatment-neuton-serif',
  treatment: 'neuton-serif',
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
  ubuntu_sans_serif,
  inter_sans_serif,
  oswald_sans_serif,
  kreon_serif,
  martel_serif,
  neuton_serif,
  sanchez_serif,
  spectral_serif
] as const;
