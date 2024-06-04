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

		await axios({
			method: "POST",
			url: "http://localhost:3001/api/set-cookie",
			data: {
				name: "SPRTFR_AT",
				value: response.data.access_token
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
