"use client"

import axios from "axios"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CallbackPage({ searchParams }) {
	const router = useRouter()

	async function init() {
		const response = await axios({
			method: "POST",
			url: "http://localhost:3001/api/get-token",
			data: {
				code: searchParams.code
			}
		})

		console.log(response.data)

		await axios({
			method: "POST",
			url: "http://localhost:3001/api/cookies",
			data: {
				name: "SPRTFR_AT",
				value: response.data.access_token,
				exp: response.data.expires_in
			}
		})
		await axios({
			method: "POST",
			url: "http://localhost:3001/api/cookies",
			data: {
				name: "SPRTFR_RT",
				value: response.data.refresh_token,
				exp: 3600 * 24 * 365
			}
		})
	}

	useEffect(function() {
		init()
			.finally(function() {
				router.push("/home")
			})
	}, [])

	return null
}
