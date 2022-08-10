module.exports = {
	name: "periodictables.zacharyc.site", // optional, falls back to object key
	description: "periodictables.zacharyc.site",
	skip: false,
	options: {
		frequency: 1440,
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://periodictables.zacharyc.site",
		"https://periodictables.zacharyc.site/table/1",
		"https://periodictables.zacharyc.site/table/2",
		"https://periodictables.zacharyc.site/table/3",
		"https://periodictables.zacharyc.site/table/4",
		"https://periodictables.zacharyc.site/table/5",
		"https://periodictables.zacharyc.site/table/6",
		"https://periodictables.zacharyc.site/table/7",
		"https://periodictables.zacharyc.site/table/8",
		"https://periodictables.zacharyc.site/table/9",
		"https://periodictables.zacharyc.site/table/10",
		"https://periodictables.zacharyc.site/table/11",
		"https://periodictables.zacharyc.site/table/12",
		"https://periodictables.zacharyc.site/tag/dark",
		"https://periodictables.zacharyc.site/tag/light",
		"https://periodictables.zacharyc.site/tag/basic",
		"https://periodictables.zacharyc.site/tag/round",
		"https://periodictables.zacharyc.site/tag/simple"
	]
};