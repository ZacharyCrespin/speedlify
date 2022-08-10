module.exports = {
	name: "zacharyc.site", // optional, falls back to object key
	description: "zacharyc.site",
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
		"https://zacharyc.site",
		"https://zacharyc.site/photography",
		"https://zacharyc.site/photography/favorites",
		"https://zacharyc.site/photography/collections",
		"https://zacharyc.site/photography/collections/lizard",
		"https://zacharyc.site/photography/collections/cameras",
		"https://zacharyc.site/photography/collections/air-show",
		"https://zacharyc.site/photography/collections/lake-tahoe",
		"https://zacharyc.site/photography/collections/irvine-park",
		"https://zacharyc.site/photography/collections/newport",
		"https://zacharyc.site/wallpapers",
		"https://zacharyc.site/shortcuts",
		"https://zacharyc.site/code"
	]
};