export const _heller_base_colors_ = {
  defaults: {
    base_white: '#ffffff',
    base_black: '#000000'
  },
  yossarian: {
    sea: '#023e8a',
    soft_violet: '#6665FE',
    charmander: '#ED6A5A',
    dandelion: '#F4F1BB',
    petrol: '#272838',
    fresh_grass: '#003844'
  },
  nately: {
    dark_purple: '#242038',
    amethyst: '#9067C6',
    middle_blue_purple: '#8D86C9',
    lavender_gray: '#CAC4CE',
    linen: '#F7ECE1'
  },
  mcwatt: {
    persian_green: '#1B998B',
    flickr_pink: '#ED217C',
    space_cadet: '#2D3047',
    canary: '#FFFD82',
    lightSalmon: '#FF9B71'
  },
  majorMajor: {
    majorvelous: '#FF9FB2',
    piggy_pink: '#FBDCE2',
    vivid_blue_sky: '#0ACDFF',
    green_sheen: '#60AB9A',
    gainsboro: '#DEDEE0'
  },
  cathcart: {
    roman_silver: '#84828F',
    old_lavender: '#6A687A',
    black_coral: '#536271',
    charcoal: '#3E4C5E',
    prussian_blue: '#2C3D55'
  },
  dunbar: {
    light_pink: '#FBB7C0',
    amaranth_purple: '#B6244F',
    flourescent_blue: '#34F6F2',
    light_cyan: '#D1F5FF'
  },
  bullwinkle: {
    laurel_green: '#BDC4A7',
    cambridge_blue: '#92B4A7',
    cinereous: '#93827F',
    light_goldenrod_yellow: '#F3F9D2',
    jet: '#2f2f2f'
  },
  hoenn: {
    misty: '#57E2E5',
    bulbasaur: '#45CB85',
    ditto: '#777DA7',
    pupitar: '#153131',
    magby: '#B02E0C'
  }
} as const;

export const _coolors_extension_pack_ = {
  soft_woodland: {
    morning_blue: '#8e9b90ff',
    eton_blue: '#93c0a4ff',
    laurel_green: '#b6c4a2ff',
    dutch_white: '#d4cdabff',
    pale_spring_bud: '#dce2bdff'
  },
  hard_grassland: {
    timberwolf: '#dad7cd',
    laurel_green: '#a3b18a',
    fern_green: '#588157',
    hunter_green: '#3a5a40',
    brunswick_green: '#344e41'
  },
  volcano: {
    charcoal: '#424b54',
    pewter_blue: '#93a8ac',
    white: '#ffffff',
    cameo_pink: '#e2b4bd',
    copper_rose: '#9b6a6c'
  },
  evening_wear: {
    midnight_eagle: '#0f5257',
    prussian_blue: '#0b3142',
    herliotrope_gray: '#9c92a3',
    lang_lavender: '#c6b9cd',
    longer_lang_lavender: '#d6d3f0'
  },
  banned_sunday: {
    tea_green: '#c9e4ca',
    eton_blue: '#87bba2',
    steel_teal: '#55828b',
    deep_space: '#3b6064',
    charcoal: '#364958'
  }
} as const;

export const _coolors_gradient_palettes_pack_ = {
  winter: {
    css: `
      background: hsla(217, 100%, 50%, 1);
      background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
      background: -moz-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
      background: -webkit-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );
    `
  },
  summer: {
    css: `
      background: hsla(152, 100%, 50%, 1);
      background: linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
      background: -moz-linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
      background: -webkit-linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00FF87", endColorstr="#60EFFF", GradientType=1 );
    `
  },
  popsicle: {
    css: `
      background: hsla(339, 100%, 55%, 1);
      background: linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);
      background: -moz-linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);
      background: -webkit-linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);
      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FF1B6B", endColorstr="#45CAFF", GradientType=1 );
    `
  },
  cold: {
    css: `
      background: hsla(221, 45%, 73%, 1);
      background: linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
      background: -moz-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
      background: -webkit-linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#9BAFD9", endColorstr="#103783", GradientType=1 );
    `
  },
  soft: {
    css: `
      background: hsla(344, 97%, 63%, 1);
      background: linear-gradient(90deg, hsla(344, 97%, 63%, 1) 0%, hsla(232, 90%, 59%, 1) 100%);
      background: -moz-linear-gradient(90deg, hsla(344, 97%, 63%, 1) 0%, hsla(232, 90%, 59%, 1) 100%);
      background: -webkit-linear-gradient(90deg, hsla(344, 97%, 63%, 1) 0%, hsla(232, 90%, 59%, 1) 100%);
      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FC4778", endColorstr="#3952F5", GradientType=1 );
    `
  }
} as const;
