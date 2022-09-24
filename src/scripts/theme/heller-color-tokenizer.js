const path = require('path');
const fs = require('fs');

const _heller_base_colors_ = {
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
    piggyPink: '#FBDCE2',
    vividBlueSky: '#0ACDFF',
    greenSheen: '#60AB9A',
    gainsboro: '#DEDEE0'
  },
  cathcart: {
    romanSilver: '#84828F',
    oldLavender: '#6A687A',
    blackCoral: '#536271',
    charcoal: '#3E4C5E',
    prussianBlue: '#2C3D55'
  },
  dunbar: {
    lightPink: '#FBB7C0',
    amaranthPurple: '#B6244F',
    flourescentBlue: '#34F6F2',
    lightCyan: '#D1F5FF'
  },
  bullwinkle: {
    laurelGreen: '#BDC4A7',
    cambridgeBlue: '#92B4A7',
    cinereous: '#93827F',
    lightGoldenrodYellow: '#F3F9D2',
    jet: '#2f2f2f'
  },
  hoenn: {
    misty: '#57E2E5',
    bulbasaur: '#45CB85',
    ditto: '#777DA7',
    pupitar: '#153131',
    magby: '#B02E0C'
  }
};

const _coolors_extension_pack_ = {
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
};

const _coolors_gradient_palettes_pack_ = {
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
};

/**
 * @name reduceColorObject
 * @returns {string[][]}
 */
function reduceColorObject() {
  let colors = [];
  let mashColorsObj = { ..._heller_base_colors_, ..._coolors_extension_pack_ };
  let mashColorsStringArr = Object.keys(mashColorsObj);
  for (const k of mashColorsStringArr) {
    for (const [vk, v] of Object.entries(mashColorsObj[k])) {
      colors.push([`${k}-${vk}`, v]);
    }
  }
  return colors;
}

/**
 * @name templateColorCss
 * @param {string} color
 */
function templateColorCss(cssClass, color) {
  return `.${cssClass}-bg { background: ${color}; }\n.${cssClass}-text { color: ${color}; }\n`;
}

/**
 * @name checkForStaleDir
 * @returns {boolean}
 */
function checkForStaleDir() {
  console.log(`#checkForStaleDir() - beginning fs operations ...`);
  const dir = process.cwd();
  const filePath = path.resolve(dir, 'public', 'styles');
  const flag = fs.existsSync(filePath);
  console.log(`#checkForStaleDir() - /public/styles exists? - ${flag}`);
  return flag;
}

/**
 * @name checkForStaleFile
 * @returns {boolean}
 */
function checkForStaleFile() {
  console.log(`#checkForStaleFile() - beginning fs operations ...`);
  const dir = process.cwd();
  const filePath = path.resolve(dir, 'public', 'styles', 'heller.css');
  const flag = fs.existsSync(filePath);
  console.log(
    `#checkForStaleFile() - /public/styles/heller.css exists? - ${flag}`
  );
  return flag;
}

function cleanDir() {
  console.log(`#cleanDir() beginning fn call ...`);
  if (checkForStaleFile() || checkForStaleDir()) {
    try {
      console.log(
        `#cleanDir() file or directory path currently exists, attempting cleaning ...`
      );
      fs.rmdirSync(path.resolve(process.cwd(), 'public', 'styles'), {
        recursive: true,
        force: true
      });
      console.log(`#cleanDir() succeeded!`);
    } catch (e) {
      throw new Error(e);
    }
  }
}

function writeDir() {
  try {
    console.log(`#writeDir() making /public/styles directory...`);
    fs.mkdirSync(path.resolve(process.cwd(), 'public', 'styles'), {
      recursive: true,
      force: true
    });
    console.log(`#writeDir() succeeded!`);
  } catch (e) {
    throw new Error(e);
  }
}

function writeOutCss() {
  let t = '';
  let colorMatrix = reduceColorObject();
  for (const row of colorMatrix) {
    t += templateColorCss(row[0], row[1]);
  }

  for (const [k, v] of Object.entries(_coolors_gradient_palettes_pack_)) {
    t += '\n';
    t += `.${k} {${v.css}}`;
    t += '\n';
  }

  const bData = Buffer.from(t, 'utf-8');

  try {
    cleanDir();
    writeDir();
    fs.writeFileSync(
      path.resolve(process.cwd(), 'public', 'styles', 'heller.css'),
      bData
    );
  } catch (e) {
    console.log(['ERROR:', e.message].join(' '));
  }
}

function main() {
  console.log('starting writing operation...');
  writeOutCss();
  console.log('done!');
}

main();
