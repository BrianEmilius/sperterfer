"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export default function useAxios(url) {
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(null)
	
	async function init() {
		try {
			const refreshTokenCookie = await axios({
				method: "GET",
				url: "http://localhost:3001/api/cookies",
				params: {
					name: "SPRTFR_RT"
				}
			})
	
			console.log(refreshTokenCookie.data.value)

			const newTokenResponse = await axios({
				method: "POST",
				url: "",
				params: {},
				
			})

			const cookie = await axios({
				method: "GET",
				url: "http://localhost:3001/api/cookies",
				params: {
					name: "SPRTFR_AT"
				}
			})
			
			const response = await axios({
				method: "GET",
				url,
				headers: {
					Authorization: "Bearer " + cookie.data.value
				}
			})
	
			setData(response.data)
			setLoading(false)
		} catch (error) {
			setError(error)
		}
	}

	useEffect(function() {
		init()
	}, [])


	return { error, loading, data }
}
