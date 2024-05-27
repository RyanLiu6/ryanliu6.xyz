const fetchWebApi = async (endpoint: string, method: string, body?: any) => {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.SPOTIFY_TOKEN}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

export const getNowPlaying = async () => {
  return (await fetchWebApi("v1/me/player/currently-playing", "GET"))
}

export const test = async () => {
  console.log("ASDFASDFASDFA");
}
