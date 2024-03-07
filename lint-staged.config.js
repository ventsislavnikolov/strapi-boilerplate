module.exports = {
  './src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['yarn lint', 'yarn prettier'],
  './config/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['yarn lint', 'yarn prettier'],
  './extensions/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['yarn lint', 'yarn prettier'],
};
