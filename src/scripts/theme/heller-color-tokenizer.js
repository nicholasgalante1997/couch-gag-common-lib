const path = require('path');
const fs = require('fs');

// TODO: were duping colors here, need to single source this object
const _heller_base_colors = {
  defaults: {
    baseWhite: '#ffffff',
    baseBlack: '#000000'
  },
  yossarian: {
    sea: '#023e8a',
    softViolet: '#6665FE',
    charmander: '#ED6A5A',
    dandelion: '#F4F1BB',
    petrol: '#272838',
    freshGrass: '#003844'
  },
  nately: {
    darkPurple: '#242038',
    amethyst: '#9067C6',
    middleBluePurple: '#8D86C9',
    lavenderGray: '#CAC4CE',
    linen: '#F7ECE1'
  },
  mcwatt: {
    persianGreen: '#1B998B',
    flickrPink: '#ED217C',
    spaceCadet: '#2D3047',
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

/**
 * @name reduceColorObject
 * @returns {string[][]}
 */
function reduceColorObject() {
  let colors = [];
  for (const k of Object.keys(_heller_base_colors)) {
    for (const [vk, v] of Object.entries(_heller_base_colors[k])) {
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
