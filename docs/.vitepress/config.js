module.exports = {
	lang: "es-MX",
	title: "Portal de Manuales HMV Soluciones",
	description: "Manuales de productos SaaS HMV Soluciones",
	base: "/manualeshmv/",
	themeConfig: {
		logo: "/assets/img/logo.png",
		siteTitle: false,
		nav: [
			{ text: "Inicio", link: "/" },
			{ text: "Manuales", link: "/inicio" },
			{ text: "HMV Soluciones", link: "https://hmvsoluciones.com" },
		],
		sidebar: [
			{
				text: "Bee Home",
				collapsed: true,
				items: [
					{ text: "Acerca de", link: "/beehome/" },
					{ text: "Manual", link: "/beehome/manual/" },
					{ text: "FAQs", link: "/beehome/faqs" },
					{ text: "Actualizaciones", link: "/beehome/actualizaciones" },
				],
			},
			{
				text: "Encuentra ME",
				collapsed: true,
				items: [
					{ text: "Acerca de", link: "/beehome/" },
					{ text: "Manual", link: "/beehome/manual/" },
					{ text: "FAQs", link: "/beehome/faqs" },
					{ text: "Actualizaciones", link: "/beehome/actualizaciones" },
				],
			},
            {
				text: "SegmaFlot",
				collapsed: true,
				items: [
					{ text: "Acerca de", link: "/beehome/" },
					{ text: "Manual", link: "/beehome/manual/" },
					{ text: "FAQs", link: "/beehome/faqs" },
					{ text: "Actualizaciones", link: "/beehome/actualizaciones" },
				],
			},
            {
				text: "Rocamon",
				collapsed: true,
				items: [
					{ text: "Acerca de", link: "/beehome/" },
					{ text: "Manual", link: "/beehome/manual/" },
					{ text: "FAQs", link: "/beehome/faqs" },
					{ text: "Actualizaciones", link: "/beehome/actualizaciones" },
				],
			},
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024 HMV Soluciones",
		},
	},
};
