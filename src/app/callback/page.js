"use client"

import axios from "axios"
import { useEffect } from "react"

export default function CallbackPage({ searchParams }) {
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
	}, [])

	return null
}
