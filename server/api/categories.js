export default defineEventHandler(async (event) => {

	const runTimeConfig = useRuntimeConfig()
	const response = await fetch(`${runTimeConfig.public.baseUrl}/api/categories?populate=deep,4`)
	const data = await response.json()

	return {
		data
	}
 })