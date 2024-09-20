import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchTopArtists, fetchTopTracks } from "../lib/spotify";

export function useTopArtists() {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["topArtists", session?.accessToken],
    queryFn: () => fetchTopArtists(session?.accessToken || ""),
    enabled: !!session?.accessToken,
  });
}

export function useTopTracks() {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["topTracks", session?.accessToken],
    queryFn: () => fetchTopTracks(session?.accessToken || ""),
    enabled: !!session?.accessToken,
  });
}
