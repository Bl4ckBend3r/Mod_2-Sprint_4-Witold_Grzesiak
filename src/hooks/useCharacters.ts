import { useEffect, useState } from "react";

export interface Character {
  _id: string;
  name: string;
  imageUrl: string;
  films?: string[];
  shortFilms?: string[];
  videoGames?: string[];
  tvShows?: string[];
}

export const useCharacters = (page: number = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`https://api.disneyapi.dev/character?page=${page}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        setCharacters(data.data);
        setTotalPages(data.info.totalPages || 1);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return { characters, totalPages, loading, error };
};
