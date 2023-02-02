// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			baseUrl: "https://timal-strapi.dev-onfire.work"
		}
	},
	pages: true,
	app: {
		// pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'Tanya Timal',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{
					charset: 'utf-8'
				},
				{
					hid: 'description',
					name: 'description',
					content: 'Description content'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				},
				{
					hid: 'og:title',
					property: 'og:title',
					name: 'og:title',
					content: 'opengraph title',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					name: 'og:description',
					content: 'opengraph description',
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: '/images/opengraph.jpeg'
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: 'opengraph site name'
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon.png"
				},
			]
		},
	},
	css: [
		'@/assets/scss/default.scss',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: ['@import "@/assets/scss/utils.scss";']
				}
			}
		},
	},
	imports: {
    dirs: ['store'],
  },
	modules: [
		'@nuxtjs/robots',
		'@vueuse/nuxt',
		'@pinia/nuxt',
	],
	build: {
		transpile: ['gsap'],
	},
})
