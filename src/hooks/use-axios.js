"use client"

import getCookie from "@/actions/get-cookie"
import axios from "axios"
import { useEffect, useState } from "react"

export default function useAxios(url) {
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(null)
	
	async function init() {
		try {
			const token = await getCookie("SPRTFR_AT")
			
			const response = await axios({
				method: "GET",
				url,
				headers: {
					Authorization: "Bearer " + token.value
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
