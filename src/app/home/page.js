"use client"

import useAxios from "@/hooks/use-axios"

export default function Home() {
	const {error, loading, data} = useAxios("https://api.spotify.com/v1/recommendations/available-genre-seeds")

	return (
		<>
			<h1 className="text-1xl font-semibold">Genres</h1>
			{loading && "loading..."}
			{data && (
				data.genres.map((genre, i) => <p key={i}>{genre}</p>)
			)}
			{error && <p>{error}</p>}
		</>
	)
}
