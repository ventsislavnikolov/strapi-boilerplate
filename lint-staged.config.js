module.exports = {
	"./src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
	"./config/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
	"./extensions/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
};
