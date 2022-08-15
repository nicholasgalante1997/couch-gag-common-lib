const path = require('path');
const fs = require('fs');

// TODO: were duping colors here, need to single source this object
const _heller_base_colors = {
  yossarian: {
    sea: '#023e8a'
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
 * @name templateColorCss
 * @param {string} color
 */
function templateColorCss(cssClass, color) {
  return `.${cssClass}-bg { background: ${color}; }\n.${cssClass}-text { color: ${color}; }\n`;
}

/**
 * @name checkForStaleFile
 * @returns {boolean}
 */
function checkForStaleDir() {
  const dir = process.cwd();
  const filePath = path.resolve(dir, 'public', 'styles');
  return fs.existsSync(filePath);
}

/**
 * @name checkForStaleFile
 * @returns {boolean}
 */
function checkForStaleFile() {
  const dir = process.cwd();
  const filePath = path.resolve(dir, 'public', 'styles', 'heller.css');
  return fs.existsSync(filePath);
}

function cleanDir() {
  if (checkForStaleFile() || checkForStaleDir()) {
    try {
      fs.rmDirSync(path.resolve(process.cwd(), 'public', 'styles'), {
        recursive: true,
        force: true
      });
    } catch (e) {
      console.log(['ERROR:', JSON.stringify(e)].join(' '));
    }
  }
}

function writeDir() {
  try {
    fs.mkdirSync(path.resolve(process.cwd(), 'public', 'styles'), {
      recursive: true
    });
  } catch (e) {
    console.log(['ERROR:', JSON.stringify(e)].join(' '));
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
    console.log(['ERROR:', JSON.stringify(e)].join(' '));
  }
}

function main() {
  console.log('starting writing operation...');
  writeOutCss();
  console.log('done!');
}

main();
