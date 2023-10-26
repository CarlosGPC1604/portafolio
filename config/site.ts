	export type SiteConfig = typeof siteConfig;

	export const siteConfig = {
	name: "Portafolio",
	description: "Mi portafolio de proyectos.",
	navItems: [
		{
		label: "Inicio",
		href: "/",
		},
		{
		label: "Proyectos",
		href: "/proyectos",
		},
		{
		label: "Blog",
		href: "/blog",
		},
		{
		label: "Contacto",
		href: "/contacto",
		},
	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
			},
			{
			label: "Proyectos",
			href: "/proyectos",
			},
			{
			label: "Blog",
			href: "/blog",
			},
			{
			label: "Contacto",
			href: "/contacto",
			},
	],
	links: {
		github: "https://github.com/CarlosGPC1604/",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
		linkedin: "https://www.linkedin.com/in/carlosgpc/",
	},
};
