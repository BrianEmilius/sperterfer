"use server"
import setCookie from "@/actions/set-cookie"
import axios from "axios"
import { cookies } from "next/headers"

export default async function CallbackPage({ searchParams }) {

	const response = await axios({
		url: "https://accounts.spotify.com/api/token",
		method: "POST",
		params: {
			"grant_type": "authorization_code",
			"code": searchParams.code,
			"redirect_uri": "http://localhost:3001/callback"
		},
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"Authorization": "Basic " + btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET)
		},
		json: true
	})

	await setCookie("SPRTFR_AT", response.data.access_token)
	//console.log(response.data)

	const userStuff = await axios.get("https://api.spotify.com/v1/me", {
		headers: {
			Authorization: "Bearer " + response.data.access_token
		}
	})

	console.log(userStuff)

	return null
}