import styled from "styled-components";
import { Character } from "../hooks/useCharacters";

interface Props {
  character: Character;
  onClick: (id: string) => void;
}

const CharacterCard = ({ character, onClick }: Props) => {
  return (
    <Card>
      <Image src={character.imageUrl} alt={character.name} />
      <Name>{character.name}</Name>
      <OpenButton onClick={() => onClick(character._id)}>Więcej</OpenButton>
    </Card>
  );
};

export default CharacterCard;

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 0.75rem;
`;

const Name = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
  text-align: center;
`;

const OpenButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1rem;
  margin-top: auto;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;
