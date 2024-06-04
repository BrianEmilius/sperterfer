export default function Home() {
  return (
    <>
      <a
        href={"https://accounts.spotify.com/authorize?"
          + "response_type=code&"
          + "redirect_uri=http://localhost:3001/callback&"
          + `client_id=${process.env.CLIENT_ID}&`
          + "show_dialog=true&"
          + "scopes=user-read-private user-read-email"
        }
        className="bg-green-400 rounded-full py-2 px-4 font-semibold my-4 inline-block max-w-prose"
      >Log in with Spotify</a>
    </>
  )
}
