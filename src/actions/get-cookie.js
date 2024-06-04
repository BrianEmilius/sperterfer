"use server"

import { cookies } from "next/headers"

export default async function getCookie(name) {
	return cookies().get(name)
}
