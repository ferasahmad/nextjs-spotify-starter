import axios from "axios";

export async function fetchTopArtists(accessToken: string) {
  const response = await axios.get(
    "https://api.spotify.com/v1/me/top/artists",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        time_range: "short_term",
        limit: 10,
      },
    }
  );
  return response.data.items;
}

export async function fetchTopTracks(accessToken: string) {
  const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      time_range: "short_term",
      limit: 10,
    },
  });
  return response.data.items;
}
