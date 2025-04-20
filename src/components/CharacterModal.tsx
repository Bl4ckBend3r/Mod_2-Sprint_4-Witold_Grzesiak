import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Character } from "../hooks/useCharacters";

interface Props {
  id: string;
  onClose: () => void;
}

const CharacterModal = ({ id, onClose }: Props) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
      const data = await res.json();
      setCharacter(data.data);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (!character || loading) return null;

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Avatar src={character.imageUrl} alt={character.name} />
        <h2>{character.name}</h2>

        {Array.isArray(character.films) && character.films.length > 0 && (
          <Section>
            <h4>Films</h4>
            <ul>
              {character.films.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Section>
        )}

        {Array.isArray(character.shortFilms) &&
          character.shortFilms.length > 0 && (
            <Section>
              <h4>Short Films</h4>
              <ul>
                {character.shortFilms.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Section>
          )}

        {Array.isArray(character.videoGames) &&
          character.videoGames.length > 0 && (
            <Section>
              <h4>Video Games</h4>
              <ul>
                {character.videoGames.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Section>
          )}

        {Array.isArray(character.tvShows) && character.tvShows.length > 0 && (
          <Section>
            <h4>TV Shows</h4>
            <ul>
              {character.tvShows.map((show) => (
                <li key={show}>{show}</li>
              ))}
            </ul>
          </Section>
        )}

        <CloseButton onClick={onClose}>Zamknij</CloseButton>
      </ModalContent>
    </Backdrop>,
    document.body
  );
};

export default CharacterModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 1rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  display: block;
`;

const Section = styled.div`
  margin-top: 1rem;
`;

const CloseButton = styled.button`
  margin-top: 2rem;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
`;
