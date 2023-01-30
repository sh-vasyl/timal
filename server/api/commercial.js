export default defineEventHandler(async (event) => {

	const runTimeConfig = useRuntimeConfig()
	const response = await fetch(`${runTimeConfig.public.baseUrl}/api/categories?populate=deep,3`)
	const data = await response.json()

	return {
		data
	}
 })