module.exports = {
	name: "fhsbellschedule.web.app", // optional, falls back to object key
	description: "fhsbellschedule.web.app",
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
		"https://fhsbellschedule.web.app",
		"https://fhsbellschedule.web.app/games",
		"https://fhsbellschedule.web.app/events"
	]
};
