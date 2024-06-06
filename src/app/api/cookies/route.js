import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request) {
	const obj = await request.json()

	cookies().set(obj.name, obj.value, { httpOnly: true, maxAge: obj.exp })

	return NextResponse.json({})
}

export async function GET(request) {
	const searchParams = request.nextUrl.searchParams

	const cookie = cookies().get(searchParams.get("name"))

	return NextResponse.json(cookie)
}