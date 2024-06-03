"use server"

import { cookies } from "next/headers"

export default async function setCookie(name, value) {
	cookies().set(name, value, { secure: true })
}