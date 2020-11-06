module.exports = {
  calc: (options) => require('postcss-calc')(options),
  flexbugsFixes: () => require('postcss-flexbugs-fixes'),
  selectorMatches: () => require('postcss-selector-matches'),
  willChange: () => require('postcss-will-change'),
  autoprefixer: (options) => require('autoprefixer')(options),
  discardComments: (options) => require('postcss-discard-comments')(options),
};
