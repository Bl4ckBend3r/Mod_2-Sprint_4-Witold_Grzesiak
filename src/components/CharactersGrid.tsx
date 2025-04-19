import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import { Character } from "../hooks/useCharacters";

interface Props {
  characters: Character[];
  onCardClick: (id: string) => void;
}

const CharactersGrid = ({ characters, onCardClick }: Props) => {
  return (
    <Grid>
      {characters.map((char) => (
        <CharacterCard
          key={char._id}
          character={char}
          onClick={onCardClick}
        />
      ))}
    </Grid>
  );
};

export default CharactersGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;
