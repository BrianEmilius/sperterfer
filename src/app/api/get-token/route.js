import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(request) {
	const obj = await request.json()

	const response = await axios({
		url: "https://accounts.spotify.com/api/token",
		method: "POST",
		params: {
			"grant_type": "authorization_code",
			"code": obj.code,
			"redirect_uri": "http://localhost:3001/callback"
		},
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"Authorization": "Basic " + btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET)
		},
		json: true
	})

	return NextResponse.json(response.data)
}
