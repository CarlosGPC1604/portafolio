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
		href: "/Proyectos",
		},
		{
		label: "Blog",
		href: "/blog",
		},
		{
		label: "Contacto",
		href: "/Contacto",
		},
	],
	navMenuItems: [
		{
		label: "Profile",
		href: "/profile",
		},
		{
		label: "Dashboard",
		href: "/dashboard",
		},
		{
		label: "Projects",
		href: "/projects",
		},
		{
		label: "Team",
		href: "/team",
		},
		{
		label: "Calendar",
		href: "/calendar",
		},
		{
		label: "Settings",
		href: "/settings",
		},
		{
		label: "Help & Feedback",
		href: "/help-feedback",
		},
		{
		label: "Logout",
		href: "/logout",
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
