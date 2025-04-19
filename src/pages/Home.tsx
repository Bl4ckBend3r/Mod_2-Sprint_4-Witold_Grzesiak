import { useState } from "react";
import styled from "styled-components";
import { useCharacters } from "../hooks/useCharacters";
import CharactersGrid from "../components/CharactersGrid";

const Home = () => {
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { characters, totalPages, loading, error } = useCharacters(page);

  const handleCardClick = (id: string) => {
    setSelectedId(id);
  
  };

  return (
    <Wrapper>
      <h2>Lista postaci Disney</h2>

      {loading && <p>Ładowanie danych...</p>}
      {error && <p> {error}</p>}

      {!loading && !error && (
        <CharactersGrid characters={characters} onCardClick={handleCardClick} />
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;
